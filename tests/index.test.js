// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  withAPIKey,
  withCredentialProvider,
  withIdentityPoolId,
  GeoMapsClient,
  GeoPlacesClient,
  GeoRoutesClient,
  maps,
  places,
  routes,
} from "../src/index";

test("can import authentication helper methods", () => {
  expect(withAPIKey).toBeDefined();
  expect(withCredentialProvider).toBeDefined();
  expect(withIdentityPoolId).toBeDefined();
});

test("can import standalone clients", () => {
  expect(GeoMapsClient).toBeDefined();
  expect(GeoPlacesClient).toBeDefined();
  expect(GeoRoutesClient).toBeDefined();
});

test("can import standalone SDKs in sub-modules", () => {
  expect(Object.keys(maps).length).toBeGreaterThan(0);
  expect(Object.keys(places).length).toBeGreaterThan(0);
  expect(Object.keys(routes).length).toBeGreaterThan(0);
});
