module.exports = {
    "test-runner": "mocha",
    "runner-config": "e2e/.mocharc.json",
    "specs": process.env.DETOX_EXPOSE_GLOBALS === '0' ? 'e2eExplicitRequire' : 'e2e',
    "behavior": {
        "init": {
            "exposeGlobals": process.env.DETOX_EXPOSE_GLOBALS === '0' ? false : true,
        },
    },
    "configurations": {
        "ios.sim.release": {
            "binaryPath": "ios/build/Build/Products/Release-iphonesimulator/nasa_test.app",
            "build": "export RCT_NO_LAUNCH_PACKAGER=true && xcodebuild -project ios/nasa_test.xcodeproj -UseNewBuildSystem=NO -scheme nasa_test -configuration Release -sdk iphonesimulator -derivedDataPath ios/build -quiet",
            "type": "ios.simulator",
            "device": {
                "type": "iPhone 11"
            }
        },
        "ios.sim.debug": {
            "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/nasa_test.app",
            "build": "xcodebuild -project ios/nasa_test.xcodeproj -UseNewBuildSystem=NO -scheme nasa_test -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
            "type": "ios.simulator",
            "device": {
                "type": "iPhone 11"
            }
        },
        "android.emu.debug": {
            "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
            "build": "cd android ; ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug ; cd -",
            "type": "android.emulator",
            "device": {
                "avdName": "Pixel_2_API_24"
            }
        },
        "android.emu.release": {
            "binaryPath": "android/app/build/outputs/apk/release/app-release.apk",
            "build": "cd android ; ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release ; cd -",
            "type": "android.emulator",
            "device": {
                "avdName": "Pixel_2_API_24"
            }
        }
    }
};