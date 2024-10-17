# Amazon Location JavaScript Client

This is a distribution of the [AWS SDK for JavaScript v3](https://github.com/aws/aws-sdk-js-v3) containing the [Amazon Location client](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-location/), our [authentication helper](https://github.com/aws-geospatial/amazon-location-utilities-auth-helper-js), and [credential providers](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-credential-providers/) intended for use in browsers.

## Installation

### Usage with a browser

Add the script to an HTML file for usage directly in the browser.

```html
<script src="https://cdn.jsdelivr.net/npm/@aws/amazon-location-client@1"></script>
```

### Usage with modules

We recommend using [@aws-sdk/client-location](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-location/) and [@aws-sdk/credential-providers](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-credential-providers/) from the [AWS SDK for JavaScript v3](https://github.com/aws/aws-sdk-js-v3) if possible to get the full benefit of the modularized AWS SDK.

## Usage

All functions are available under the `amazonLocationClient` global.

This example uses the Amazon Location Client to make a request that authenticates using an API key.

```html
<!-- Import the Amazon Location Client -->
<script src="https://cdn.jsdelivr.net/npm/@aws/amazon-location-client@1"></script>
```

```javascript
// Create an authentication helper instance using an API key
const authHelper = await amazonLocationClient.withAPIKey("<API Key>");

const client = new amazonLocationClient.GeoPlacesClient({
  region: "<Region>", // Region containing Amazon Location resource
  ...authHelper.getLocationClientConfig(), // Provides credentials obtained via API key
});
const input = { ... };
const command = new amazonLocationClient.routes.CalculateRouteCommand(input);
const response = await client.send(command);
```

## Documentation

Refer to [@aws-sdk/client-location](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-location/) and [@aws-sdk/credential-providers](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-credential-providers/) for documentation.

Prefix the class from the `@aws-sdk/client-location` documentation with `amazonLocationClient.` when using this Amazon Location Client library (or destructure imports to match).

- For example, `const command = new CalculateRouteCommand(input);` corresponds to `const command = new amazonLocationClient.CalculateRouteCommand(input);`

## Getting Help

The best way to interact with our team is through GitHub.
You can [open an issue](https://github.com/aws-geospatial/amazon-location-client-js/issues/new/choose) and choose from one of our templates for
[bug reports](https://github.com/aws-geospatial/amazon-location-client-js/issues/new?assignees=&labels=bug%2C+needs-triage&template=---bug-report.md&title=),
[feature requests](https://github.com/aws-geospatial/amazon-location-client-js/issues/new?assignees=&labels=feature-request&template=---feature-request.md&title=)
or [guidance](https://github.com/aws-geospatial/amazon-location-client-js/issues/new?assignees=&labels=guidance%2C+needs-triage&template=---questions---help.md&title=).
If you have a support plan with [AWS Support](https://aws.amazon.com/premiumsupport/), you can also create a new support case.

Please make sure to check out the following resources before opening an issue:

- Our [Changelog](CHANGELOG.md) for recent changes.

## Contributing

We welcome community contributions and pull requests. See [CONTRIBUTING.md](CONTRIBUTING.md) for information on how to set up a development environment and submit code.

## License

Amazon Location JavaScript Client is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE.txt and NOTICE.txt for more information.
