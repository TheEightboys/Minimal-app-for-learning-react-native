// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const default_config = getDefaultConfig(__dirname);
default_config.resolver.assetExts.push('cjs');
module.exports = default_config;
