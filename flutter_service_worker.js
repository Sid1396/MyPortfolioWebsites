'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b71c921661a148248d783aaeb75db469",
"index.html": "612ff80a86c2b1321dbd247b771f3f2e",
"/": "612ff80a86c2b1321dbd247b771f3f2e",
"main.dart.js": "ecaa2d0d3a3741175ea6c87cc09bc812",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "302a933e7e0143b07d99bc56132b1015",
".git/config": "e39d9644406f68ebf9795fb58819e276",
".git/objects/61/25401ce154ceecb8f7bc3a9602c14f405a94fe": "2b8141025e72859d6f41b0cd5d0919c9",
".git/objects/3e/d32f0ce901493c27f211decdd71b17f471dc76": "ed863f51575b10566f3ac905d448ac82",
".git/objects/04/8f9d332948af99d52e9f0397dc03282f4c77fd": "5b6ca118fce47a9a7b5cb5d03701e18f",
".git/objects/35/039de8869a5f7569743ae8a04cec78efcc9a7b": "875fba6bd50ed755d98badade827f552",
".git/objects/3c/37b5113c19b652209cb31db3a3190fd3a95837": "ffcec84dfc4f81ea4e42ee7a65d93423",
".git/objects/3d/079ae355042b78734fab5a2ae0769bdeb20759": "9f216657655b99e03742c89faffc9aed",
".git/objects/67/fcd41fd11c92a1a234c61eb55c768d48b05c0e": "943d9284ed8efcc126dd50d7b89985e4",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/60/3849360eb78e7f7078f0c3af26dbf3fd4ce1c9": "046a1c0face2262abf791eaf570f04fb",
".git/objects/33/1ac14058ab4190584d07cd5a14b0f0766c4236": "231ba73f269e2311378779d0fc4fd4ac",
".git/objects/02/f04707f392aafabce643adbfa63822af435c21": "0472e988e743160916ed33b911bfbc0a",
".git/objects/a4/8005252999f9eb63bb6349f9f19a375ef8b789": "6a00a1b6c2f246907bfc0ec97376dd6e",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/d7/de3a83b9c32a7edc594fe56cf3bc1d0aabe905": "8d803862f43632c809b34e68e70b03fd",
".git/objects/a5/7b2e999045a185f28ba211643f8d4535057e30": "018219273c065162f9d3d7b8d5dafdb2",
".git/objects/a5/0f63296359183a79aec747244fa1185c27b860": "a7456215e69f7f5f9349266360b2a3f8",
".git/objects/d1/f3219619960018f7eb50a7ef0345dbef1f9f9a": "498485ba10578daa6ec2026bed9b0b62",
".git/objects/d8/32e3d338d985c9faa750bab56f76e169d84d6a": "60847e79eff51ad4e78fdb3ba401d193",
".git/objects/e5/f6015d0f22e483571df1153923bd2f3c7be1b6": "f42ca8b6f08e59a1e363b4db21ad4bf0",
".git/objects/eb/e6beb826a0e67ff0660c14956afc16e212dec2": "6fac8774c9d41d45f21b402f5d0c864f",
".git/objects/c0/905349adb60ca1c1308537fe35cc5e4119b171": "7a5fe83435d75ad90f817a0e37f90c61",
".git/objects/c9/1a44586b4a03cb589760770e96fd92355ff0e2": "f39c04573e142c1717d12af63221c7ec",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/e4/17ff5fe2565a1514a6c2aa10e6d4c730b7c660": "485de1afad5076fad7216f17bed85a58",
".git/objects/fe/701ef7c1561600d152f0e0d89e4a68cfed34f8": "f43bf05b43a3e5a237483d43fc1946ff",
".git/objects/fb/1c58557cdf4fe54339686eede2465bac8fd312": "b49949969018e1dca932faf6061c3130",
".git/objects/c6/a737d97d0d4e27a102bdaf5936a8557c85e48d": "3e4bfc4c4e9e888af98544a78b1a244e",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/90e1b1cd2ed93ecb4e248e8960f4022b2342f2": "1ccb9e48fbb6791e07c5f9aac8c85edc",
".git/objects/27/48ba052fa5387cadc9b6e03c9252b981ca9ddc": "83130e1173ce125db11702dffc60cb9f",
".git/objects/29/42aa05a74c794231bfa8bf454f519a7adfa8bb": "78c1ef16e209e35a46649671e31d87f6",
".git/objects/16/084199371c93e2f94bc4231e2ca6f41f98b5d1": "f32251938b09e19cc99dd52c8921117d",
".git/objects/16/08af2d8ae02b5f066caa0219c9689a2248674e": "7500b482e6891c766e37ad5fca8bdd9d",
".git/objects/89/e8506ba545f83d2076700df596635f00aefed9": "efbefba1d132191d5bcb62e60878df4c",
".git/objects/1a/8fe6413935ea635921bc35151bd3ea69c22e88": "19e60f5bc6222b1b9323c8f1c22f3eab",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/06aa0d2110617c642c41b8ca57ab21e0ec602b": "c33895e93541ff76f1b20407c2893f19",
".git/objects/75/cb25e5e79ffafbc5d6445b38edf42db01cca4d": "18306eaf514203cca8a791a642a74b23",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/fe501e5ac3eec0152bc0855c0e2cdd4d32ff1c": "30bb07f33bfe4bd6f7906c79328a9051",
".git/objects/5c/fbae1e414394d37f4b9e665ffba2852e7ac138": "eff1a99b44cd3e31fba44b70349430d8",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/09/0c63f897e03af194dec7de21b6cc785e70dd98": "fd412e4dde82d7df3d32582161591d8c",
".git/objects/09/e764dcb7ef5c8303e10fd5efdd8c7a19500a69": "72833362839abfb6df690d2bc9d06e71",
".git/objects/65/711a64d5824f8dc28ac256422dd0c5b8ebea6d": "fced0aeff83a9b964603647be96cd8cb",
".git/objects/3a/2494959043b059849c004a6e7134e3abbf1f68": "5722c70bc3407a0b8df2f019bc2b6f11",
".git/objects/3f/5bf86957ec441954923ac1add803fb7fae7546": "5c53875d245b68f21ff177e38110323f",
".git/objects/08/cba5eee7b50143b0bf4486c6b7823c1fa60ec8": "d4140385e990cdff52f2affdb89e4bac",
".git/objects/08/d905164d420e1cd43a8009073bd13c3ecce2b8": "f62b359fcc8c308e0a538cffb9b604fa",
".git/objects/39/9b1fab91aef5ca3dd9507cf691345b321c7571": "7847ac0e93fbb0b0ac4488210db93d07",
".git/objects/99/e6c8e8007773ab0b30763d0929dd8ede5054a7": "64b487e89b4fa6bd6a9a7e651ca52bcf",
".git/objects/55/28ce24d247ba57fe5a4d14b04d138b6a029af9": "d5f011ec45619644382562a29e0a0f1d",
".git/objects/63/9d43aa9961bb3f5140664c0f3148ab7d22abb3": "893ce24920fa0f84d6b6122e41f264e8",
".git/objects/bf/7d9257a4e113ff824fc5eaea2cd64cfe48cab4": "73f565104845037c88c50641f7d96474",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/d4/1437b99e62455d3c377a693c1eca5ba8505b7f": "9553e03344b770ad0280f1679afc6930",
".git/objects/d4/54a606b8c5e5a07f4da151e1b0d0b38accfadf": "55ed2692405712b0a753cc288f841d99",
".git/objects/ba/5a47237d30c4c15304243e20398c74ec0b6858": "7f39236b99ac53c6c31ab58258162c1c",
".git/objects/a7/45c7044245fd465f0381b222e5317a0434acf6": "c4884449f5cbdaf07c5a72650cc5f434",
".git/objects/b1/5a74a8599552a4803ff8d93d23ca5f2d112046": "e50a97fa1ba8aaf0a4137608fd31829a",
".git/objects/b6/2c8739f636ea648541af513f96ba8060f2539c": "fcf245e4cd2847187bea3b1705f905e1",
".git/objects/a9/093514fdd98afbfa4843d18423a53eba03f958": "17cf2a884511c4ddec95cb3fc2806288",
".git/objects/d2/e92a6818cd0b93caa07c6424e792cfae72b22f": "939d36282ddc3eb596d9ce71bb4591eb",
".git/objects/aa/7cc029082ba129b8a7ecbac0e7d3a396466c51": "f03c79c10e0f4c2bf6eca1bb511eb632",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/a8/c0affa0562a72e39304e72603aea1a01832ea2": "5635789151f872cb5f0fc5971279d2c0",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/a6/4f46b003ff83783caf3d0bfad097bbbfdba540": "f5d6e1b791ea714321c56ae6b9111f37",
".git/objects/f9/ab7a95b0dd2bec280ef74c7b56271e23472cd5": "1466341e34a1020ba148f7f72f454ac2",
".git/objects/f9/acfb9add617e2d7a300a4bb9f1162f19fbe8db": "0146e01f93875c1ff3b92f71106cb50c",
".git/objects/e8/4d830f8a7bcd30d9cdc6152c31b21d3d242f35": "5544051ac5ee4b3e06883e10b6de54f9",
".git/objects/c2/506f460104eeb299dbf9955518be8a6ef8a77f": "5696b24bee9c861c89f1cac442e00862",
".git/objects/77/e58760cbcba27e78c6739607c83aa56f55f9ed": "e3a854772bddd6793f54067b2b9bea5b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/1d/4a1f0b802131ca0745febdb8f9065adb2e1862": "da55e0f8469e5b3a02ebea4694331b4a",
".git/objects/71/0d1693c3bb457b7377eeaec32880a1b007af9b": "91eb2972e1419a37ffa9c1a3d03226ff",
".git/objects/1c/6d9c9b62f1851ca6a454fc3455bb924b77b4be": "1c8843ec5841b577c0d6c088bbaa06ef",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/82/c4c8b347c3a1a3ff2e46a6082eb48a00f24b57": "bc14d18c35e52d44f3464ba894cda714",
".git/objects/40/7d7f49d67912a3c968fcbbd47e01cf7e9f258a": "1da2c761d33cbf63740250176a95c16c",
".git/objects/40/6acb21ad8a1e9bd61faeb5317ba53cbf068b19": "58e8b022e3402cac2d4389fa3a3e1ec4",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/14/a62477aea405b985da417e3b45d2fa89d8cc3b": "8729503968dc021307df6c136cf6a384",
".git/objects/14/74a845ab21bc0d568f298efd863c84b7d59b1d": "a7190db3f5bc0ed532e35555a3ad91e9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "29f8222001fb95df78733cff715c9cfc",
".git/logs/refs/heads/main": "ec73dd16d723cd06225f5a824fecc17f",
".git/logs/refs/remotes/origin/main": "ab58f83f5dd39aeefa70663509a28c48",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "de8932aa81d973f99db3e9d101f80666",
".git/refs/remotes/origin/main": "de8932aa81d973f99db3e9d101f80666",
".git/index": "5b7b00df43a515a983952411ad433d97",
".git/COMMIT_EDITMSG": "bc54125d78982c529047154ba0571edc",
"assets/AssetManifest.json": "8308cd517240eeceefc17ff53a54fe59",
"assets/NOTICES": "159eeff9975f2835897ab5057276056c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/backgorund_img.jpg": "8e74a04cb996e435041294482566ec2c",
"assets/assets/appdevloper.jpg": "3013f864719a4dd698de696b7ce6aebb",
"assets/assets/ShopGoLocal.png": "5a9aaf29a2892e853a05da8016a64baa"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
