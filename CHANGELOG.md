# 1.3.1

### ✨ Features and improvements

- Updated package dependencies
  - Bumped `@rollup/plugin-terser` from 0.4.4 to 1.0.0
  - Bumped `fast-xml-parser` from 5.3.6 to 5.7.2 (via `@aws-sdk/xml-builder`)
  - Bumped `serialize-javascript` from 6.0.2 to 7.0.5 (via `@rollup/plugin-terser`)
  - Bumped `rollup` from 4.39.0 to 4.59.0
  - Bumped `yaml` from 2.7.1 to 2.8.3
  - Bumped `picomatch` from 4.0.2 to 4.0.4
  - Bumped `minimatch` from 3.1.2 to 3.1.5
  - Bumped `brace-expansion` from 1.1.12 to 1.1.13

# 1.3.0

### ✨ Features and improvements

- Added support for the new `withCredentialProvider` authentication method from the auth helper, enabling custom credential providers (e.g. credentials from a custom backend or a different AWS authentication mechanism)
- Updated `@aws/amazon-location-utilities-auth-helper` from 1.2.3 to 1.3.0
- Updated package dependencies
  - Bumped `@aws-sdk/client-location`, `@aws-sdk/client-geo-maps`, `@aws-sdk/client-geo-places`, `@aws-sdk/client-geo-routes`, and `@aws-sdk/credential-providers` from 3.986.0 to 3.992.0
  - Bumped `fast-xml-parser` from 5.3.4 to 5.3.6 (via `@aws-sdk/xml-builder`) ([dependabot#10](https://github.com/aws-geospatial/amazon-location-client-js/security/dependabot/10))

# 1.2.3

### ✨ Features and improvements

- Updated package dependencies
  - Bumped `@aws-sdk/client-location`, `@aws-sdk/client-geo-maps`, `@aws-sdk/client-geo-places`, `@aws-sdk/client-geo-routes`, and `@aws-sdk/credential-providers` from 3.782.0/3.914.0 to 3.986.0
  - Bumped `fast-xml-parser` from 5.2.5 to 5.3.4
  - Bumped `js-yaml` from 3.14.1 to 3.14.2 (security fix)

# 1.2.2

### ✨ Features and improvements

- Updated package dependencies

# 1.2.1

### ✨ Features and improvements

- Updated package dependencies

# 1.2.0

### ✨ Features and improvements

- Updated to latest version of `amazon-location-utilities-auth-helper-js` which contains support for Amazon Cognito with standalone Maps SDK URLs and modified the `withAPIKey` method to be synchronous

# 1.1.1

### 🐞 Bug fixes

- Fixed exports of Maps, Places, and Routes SDKs. They were getting exported as undefined.

# 1.1.0

### ✨ Features and improvements

- Added support for new standalone Maps, Places, and Routes SDKs

# 1.0.2

### ✨ Features and improvements

- Improved bundling
- Simplified import URL in usage documentation

# 1.0.1

### ✨ Features and improvements

- Updated documentation with usage examples

# 1.0.0

### ✨ Features and improvements

- Initial release
