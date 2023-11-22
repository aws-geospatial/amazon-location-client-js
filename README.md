# Amazon Location JavaScript Client

Distribution of the [AWS SDK for JavaScript v3](https://github.com/aws/aws-sdk-js-v3) containing the [Amazon Location client](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-location/) and [credential providers](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-credential-providers/) to be used as a script for the browser.

# Installation

## Usage with the browser

Add the script to an HTML file for usage directly in the browser.

```html
<script src="https://www.unpkg.com/@aws/amazon-location-client@1.x/dist/amazonLocationClient.js"></script>
```

## Usage with modules

We recommend to use [@aws-sdk/client-location](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-location/) and [@aws-sdk/credential-providers](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-credential-providers/) from the [AWS SDK for JavaScript v3](https://github.com/aws/aws-sdk-js-v3) for the full benefit of modularized AWS SDK.

# Usage

All of the functions will be under `amazonLocationClient`.

This example uses the Amazon Location Client to make a request that that authenticates using Amazon Cognito.

```html
<!-- Importing Amazon Location Client -->
<script src="https://www.unpkg.com/@aws/amazon-location-client@1.x/dist/amazonLocationClient.js"></script>
```

```javascript
const identityPoolId = "<Identity Pool ID>";

const client = new amazonLocationClient.LocationClient({
  region: "<Region>", // region containing Amazon Location resource
  credentials: amazonLocationClient.fromCognitoIdentityPool({
    clientConfig: {
      region: "<Region>", // region containing Amazon Cognito Identity Pool
    },
    identityPoolId
  })
});
const input = { ... };
const command = new amazonLocationClient.CalculateRouteCommand(input);
const response = await client.send(command);
```

We can further simplify the authentication process by introducing the [Amazon Location authentication helper utility library](https://github.com/aws-geospatial/amazon-location-utilities-auth-helper-js)

```html
<!-- Importing Amazon Location Client -->
<script src="https://www.unpkg.com/@aws/amazon-location-client@1.x/dist/amazonLocationClient.js"></script>
<!-- Importing the Amazon Location authentication helper utility library -->
<script src="https://www.unpkg.com/@aws/amazon-location-utilities-auth-helper@1"></script>
```

```javascript
const identityPoolId = "<Identity Pool ID>";

// Create an authentication helper instance using credentials from Cognito
const authHelper = await amazonLocationAuthHelper.withIdentityPoolId(identityPoolId);

const client = new amazonLocationClient.LocationClient({
  region: "<Region>", // region containing Amazon Location resource
  ...authHelper.getLocationClientConfig(), // Provides configuration required to make requests to Amazon Location
});
const input = { ... };
const command = new amazonLocationClient.CalculateRouteCommand(input);
const response = await client.send(command);
```

# Documentation

Refer to [@aws-sdk/client-location](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-location/) and [@aws-sdk/credential-providers](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-credential-providers/) for documentation.

Prefix the class from the @aws-sdk/client-location documentation with `amazonLocationClient.` when using this Amazon Location Client library.

- For example, `const command = new CalculateRouteCommand(input);` should be used as `const command = new amazonLocationClient.CalculateRouteCommand(input);`

# Getting Help

The best way to interact with our team is through GitHub.
You can [open an issue](https://github.com/aws-geospatial/amazon-location-client-js/issues/new/choose) and choose from one of our templates for
[bug reports](https://github.com/aws-geospatial/amazon-location-client-js/issues/new?assignees=&labels=bug%2C+needs-triage&template=---bug-report.md&title=),
[feature requests](https://github.com/aws-geospatial/amazon-location-client-js/issues/new?assignees=&labels=feature-request&template=---feature-request.md&title=)
or [guidance](https://github.com/aws-geospatial/amazon-location-client-js/issues/new?assignees=&labels=guidance%2C+needs-triage&template=---questions---help.md&title=).
If you have a support plan with [AWS Support](https://aws.amazon.com/premiumsupport/), you can also create a new support case.

Please make sure to check out our resources too before opening an issue:

- Our [Changelog](https://github.com/aws-geospatial/amazon-location-client-js/blob/master/CHANGELOG.md) for recent changes.

# Contributing

We welcome community contributions and pull requests. See [CONTRIBUTING.md](https://github.com/aws-geospatial/amazon-location-client-js/blob/master/CONTRIBUTING.md) for information on how to set up a development environment and submit code.

# License

Amazon Location JavaScript Client is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE.txt and NOTICE.txt for more information.
