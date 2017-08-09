import {
  Platform,
  Linking
} from 'react-native';

const DeviceInfo = require('react-native-device-info');

const NO_VERSION: string = '0.0.0';

const CURRENT_VERSION: string = DeviceInfo.getVersion();
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.townstory';
const ITUNES_URL = 'https://itunes.apple.com/lookup?bundleId=com.townstory&country=JP';
const ITUNES_APP_URL = 'itms-apps://itunes.apple.com/jp/app/townstory/id1187821586?mt=8&uo=4';
const GOOGLE_PLAY_APP_URL = 'market://details?id=com.townstory';

export default class AppVersionManager {

  constructor() {
    const self = this;
    self.currentVersion = self.getCurrentVersion();
    self.latestVersion = NO_VERSION;
  }

  check(force: boolean = false): Promise<boolean>  {
    const self = this;

    if (self.latestVersion !== NO_VERSION && !force) {
      return Promise.resolve(self.checkUpdate());
    } else {
      return self.getLatesetVersion().then((version: string) => {
        self.latestVersion = version;
        return Promise.resolve(self.checkUpdate());
      });
    }
  }

  checkUpdate(): boolean {
    const self = this;

    const nCurrent: number[] = self._parseVersion(self.currentVersion);
    const nLatest: number[] = self._parseVersion(self.latestVersion);

    if (nCurrent[0] < nLatest[0]) {
      return true;
    } else if ((nCurrent.length > 1 && nLatest.length > 1) &&  nCurrent[0] === nLatest[0] && nCurrent[1] < nLatest[1]) {
      return true;
    } else if ((nCurrent.length > 2 && nLatest.length > 2) && nCurrent[0] === nLatest[0] && nCurrent[1] === nLatest[1] && nCurrent[2] < nLatest[2]) {
      return true;
    } else {
      return false;
    }
  }

  // this app version
  getCurrentVersion(): string {
    return CURRENT_VERSION;
  }

  // app-on-the-store version
  getLatesetVersion(): Promise<string> {
    const self = this;

    try {
      switch (Platform.OS) {
        case 'ios':
          return self._getLatesetVersionIos();
        case 'android':
          return self._getLatesetVersionAndroid();
        default:
          return NO_VERSION;
      }
    } catch (e) {

    }
  }

  openAppStore(): void {
    let storeUrl;
    switch (Platform.OS) {
      case 'ios':
        storeUrl = ITUNES_APP_URL;
        break;
      case 'android':
        storeUrl = GOOGLE_PLAY_APP_URL;
        break;
      default:
        break;
    }

    if (storeUrl) {
      try {
        Linking.canOpenURL(storeUrl).then(supported => {
          if (supported) {
            Linking.openURL(storeUrl);
          } else {
            console.log('Don\'t know how to open URI: ' + storeUrl);
          }
        });
      } catch (error) {

      }
    }
  }

  // MARK: - private

  _parseVersion(version: string): number[] {
    const versions: string[] = version.split(/\./);
    return [Number(versions[0]), Number(versions[1]), Number(versions[2])];
  }

  _getLatesetVersionIos(): Promise<string> {
    const self = this;
    return self._fetchFromAppleItunes().then((json: JSON) => {
      const _result = json['results'][0];

      const _version = _result['version'];
      return _version;
    }).catch((err) => {
      // parse error
      console.error(err);
      return NO_VERSION;
    });
  }

  _getLatesetVersionAndroid(): Promise<string> {
    const self = this;
    return self._fetchFromGooglePlayStore().then((text: string) => {
      const _match = text.match(/itemprop=\"softwareVersion"(.*?)>(.*?)(\d+\.\d+\.\d+)(.*?)(operating?)(.*?)/);

      const _version: string = _match[3];
      return _version;
    }).catch((err) => {
      // parse error
      console.error(err);
      return NO_VERSION;
    });
  }

  _fetchFromAppleItunes(): Promise<JSON> {
    const self = this;
    const url = ITUNES_URL;
    return fetch(url).then((res) => {
      return res.json();
    }).catch((err) => {
      return err;
    });
  }

  _fetchFromGooglePlayStore(): Promise<string> {
    const self = this;
    const url = GOOGLE_PLAY_URL;
    return fetch(url).then((res) => {
      return res.text();
    }).catch((err) => {
      return err;
    });
  }
}
