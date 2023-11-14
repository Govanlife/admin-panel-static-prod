'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "21f84f20306eaadffc8e7adf61909e62",
"splash/img/light-2x.png": "04e26ab0f856f5fada3cf634145bbd2a",
"splash/img/dark-4x.png": "c6240194acc41fa2856ddfc314ae98b6",
"splash/img/light-3x.png": "1047b771b469461f6c4394beab4a1e7c",
"splash/img/dark-3x.png": "1047b771b469461f6c4394beab4a1e7c",
"splash/img/light-4x.png": "c6240194acc41fa2856ddfc314ae98b6",
"splash/img/dark-2x.png": "04e26ab0f856f5fada3cf634145bbd2a",
"splash/img/dark-1x.png": "370da2a39da2aa8545d91b7638ebaae3",
"splash/img/light-1x.png": "370da2a39da2aa8545d91b7638ebaae3",
"index.html": "ea9ae72d6340572281b3a90405e55c81",
"/": "ea9ae72d6340572281b3a90405e55c81",
"main.dart.js": "bcbef5d1fa606604c3a648a8e7cb5744",
"sqlite3.wasm": "59b0b16e9818fad51d4ec7c1400fd1dd",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"drift_worker.js": "dbaa92b41d5be5dc52f32207f7bd0d1f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6fc6cb93f708d44e6ae548ab35e8d029",
"assets/AssetManifest.json": "580228c442c2921ed27e5ca433ea9e3d",
"assets/NOTICES": "88428878b5c1bf55b17e61459eab375b",
"assets/FontManifest.json": "afa23d7ffe49df37f4ac38f343bfd808",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "5561c896205315fb5de5e6b3ff8a53b4",
"assets/fonts/MaterialIcons-Regular.otf": "e929b45ae7da790ee5a08b698074a916",
"assets/assets/images/telegram.png": "7dde042710630706a4709a0d31fcff50",
"assets/assets/images/3x/telegram.png": "d57ac17d2b03d09d0ad9fdc868d73769",
"assets/assets/images/3x/auth_logo.png": "cc7183358265efe02cd2ecf7df6edc11",
"assets/assets/images/3x/search.png": "d58fb80d4c26d8b446c976be742bf559",
"assets/assets/images/3x/filter.png": "23acb2aa6ea48ee30b109a65fd8ed89a",
"assets/assets/images/3x/delete_photo.png": "2912bd17f2839ef501c20c348d80a981",
"assets/assets/images/3x/cellular_connect.png": "ffb7e139a670d1299cc99b09ea63cc2d",
"assets/assets/images/3x/youtube.png": "0b1b0be509206e61c3e2c9a4136fee9d",
"assets/assets/images/3x/star.png": "60b3c52182adb7cccef2672d67ff2693",
"assets/assets/images/3x/vkontakte.png": "8df4016f19f71d01ed62f5f3c206977d",
"assets/assets/images/3x/save.png": "d10b54bd83feed9df829dae6d6264177",
"assets/assets/images/types/hotel.png": "79190a5c729e4c0fc6524a61c849569c",
"assets/assets/images/types/farm.png": "83034418d2242f6ba5893a1fae572dfa",
"assets/assets/images/types/bath.png": "7310eec2bb7dfde4b6582fc54de89f88",
"assets/assets/images/types/camping.png": "c3f3ef367f121e7b0a62d71916905cc7",
"assets/assets/images/types/parking.png": "ad407098b0eaf30c7bb84421cbca721c",
"assets/assets/images/types/water.png": "6966bf52c1761748cd6a461e018a8248",
"assets/assets/images/types/wild_camping.png": "373f16f31249c34e15ca1f1442f23005",
"assets/assets/images/types/museum.png": "18d9e3d6e4020752420b1a8862a3145f",
"assets/assets/images/types/setting.png": "639ca1f48d2fa2a3e16ab82a3e5452b6",
"assets/assets/images/1.5x/telegram.png": "15ee4ec9d16253343c8645443f87c5f6",
"assets/assets/images/1.5x/auth_logo.png": "3b85cc934a31fe3d457117e45d9c9abf",
"assets/assets/images/1.5x/search.png": "75864522512c76f64ed8e467d818e4f9",
"assets/assets/images/1.5x/filter.png": "fe76761e9770c5a23743deaea7ddccad",
"assets/assets/images/1.5x/delete_photo.png": "e536b88d4a86999a3b28ccc3e69df684",
"assets/assets/images/1.5x/cellular_connect.png": "a77069a2c74fb333034fe2f79e17914c",
"assets/assets/images/1.5x/youtube.png": "0151f908358ffe05aca6b17bdd49f30d",
"assets/assets/images/1.5x/star.png": "c5208631eb64c97a0e459745723c7831",
"assets/assets/images/1.5x/vkontakte.png": "bcc9fc98e3a03c3442ea2bdc24580691",
"assets/assets/images/1.5x/save.png": "172effc054ba6e678f25ecfb8874dad1",
"assets/assets/images/location/3x/edit_location.png": "6f47ae24e8201f191dbf2d8315d48ef3",
"assets/assets/images/location/3x/returns.png": "85fd4a5a61555d23d07fbfad96e7073d",
"assets/assets/images/location/3x/add_photo.png": "7a96ec4ccc28475a5696af7cddca028e",
"assets/assets/images/location/3x/done.png": "65f31fa43473af68c138e87d13e0e43b",
"assets/assets/images/location/3x/eye.png": "91f749ee130c054a8c914b9692a36662",
"assets/assets/images/location/3x/close.png": "0f7bef8d506f4b71eac6e083ff944cd3",
"assets/assets/images/location/edit_location.png": "d1b36bc09cf14e88dbd643aa03ad9145",
"assets/assets/images/location/returns.png": "5824e9e927dd676336f8c1fd26b07495",
"assets/assets/images/location/1.5x/edit_location.png": "cf7a2a562308f983770cd4a282b76eee",
"assets/assets/images/location/1.5x/returns.png": "027f755380c262a04d77330f0f421ef9",
"assets/assets/images/location/1.5x/add_photo.png": "1e97202ce4f20e18d410db7bedf55f70",
"assets/assets/images/location/1.5x/done.png": "498af22ed43d1bd963fee2d5ee555c0f",
"assets/assets/images/location/1.5x/eye.png": "64d85311ac573af1c52a30009daf6881",
"assets/assets/images/location/1.5x/close.png": "184f2702bdda63d0e9ef83f7fdc48e26",
"assets/assets/images/location/add_photo.png": "95365ae7997b6463de35e6eda5c5af82",
"assets/assets/images/location/4x/edit_location.png": "732982361e10bb87f46af6ecdda2a136",
"assets/assets/images/location/4x/returns.png": "c36b0d914e6d91ed32e90f2da989820d",
"assets/assets/images/location/4x/add_photo.png": "3c358374a40aa65c524390b8a7c547f6",
"assets/assets/images/location/4x/done.png": "fa688ec17865bc800df955e7a59adc7c",
"assets/assets/images/location/4x/eye.png": "cbbc877ceb6b5db35b2704398b5ef45a",
"assets/assets/images/location/4x/close.png": "aa3e332a436adf00bce20f46c9d67950",
"assets/assets/images/location/done.png": "811405b9c6fa9518ca4adb1854cc7e9f",
"assets/assets/images/location/eye.png": "f24a4d452d0b7aedbf1c53f2963a4ed0",
"assets/assets/images/location/2x/edit_location.png": "280631056b9834947da9cc9e26edf99e",
"assets/assets/images/location/2x/returns.png": "e4e9b6dfab7b54628d713e89b004b0c1",
"assets/assets/images/location/2x/add_photo.png": "47eecb3929ae38d6e64bca97e7108c97",
"assets/assets/images/location/2x/done.png": "767b55b11e7839b4d82085e5a229aa17",
"assets/assets/images/location/2x/eye.png": "1535614adca73dfd9b795d53390124e0",
"assets/assets/images/location/2x/close.png": "9b17e669acb202c456126ac756dde74a",
"assets/assets/images/location/close.png": "b18c58abe4197bebc5b33c97cf4cac09",
"assets/assets/images/auth_logo.png": "5b002def55677c7f95ee12c845270cae",
"assets/assets/images/icon-1024x1024.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/4x/telegram.png": "e512fdc6ca613039cfe743bb20c91223",
"assets/assets/images/4x/auth_logo.png": "3c66b875574b7b911beab540c57e04d3",
"assets/assets/images/4x/search.png": "6e380aa94ca9e85344ae60604ac1855d",
"assets/assets/images/4x/filter.png": "321ff116b5f88b9dd533893d6a48fcea",
"assets/assets/images/4x/delete_photo.png": "196721a0241e56dfe94e4106691aa074",
"assets/assets/images/4x/cellular_connect.png": "6b556c693300554264e9d0a0015dc016",
"assets/assets/images/4x/youtube.png": "f95367ba2fb6e6cc697792f5dc68c685",
"assets/assets/images/4x/star.png": "6b94f1a664613efb611b4be022664370",
"assets/assets/images/4x/vkontakte.png": "845a33a0b00de54c50e9476d119ad525",
"assets/assets/images/4x/save.png": "e90d46d4a55b0492cf5aabe4941268ef",
"assets/assets/images/search.png": "2085d2e066eaf798f86348ae5f6db156",
"assets/assets/images/placeholder.PNG": "1758020e9047d7aa6939ba9356b41d6d",
"assets/assets/images/filter.png": "05176f699aa9d52002a2233bf4477a55",
"assets/assets/images/delete_photo.png": "4cbf2aa1852195a6071c7290a957da84",
"assets/assets/images/cellular_connect.png": "5917172c925be0fc40f30afc970f1dbe",
"assets/assets/images/youtube.png": "05f394b5b1784b60bbd7240e584162b9",
"assets/assets/images/star.png": "5a692d72efbbd91ef6097145eb924e25",
"assets/assets/images/vkontakte.png": "35aab09f94df758862ed36ae0589d2bf",
"assets/assets/images/2x/telegram.png": "523bc510a7ea8dbfc32273a73aab8de0",
"assets/assets/images/2x/auth_logo.png": "b35f4f46fac84d7fba4e23031947656d",
"assets/assets/images/2x/search.png": "375c52e2f81579a24fb5de0f92931545",
"assets/assets/images/2x/filter.png": "dd19b358e5d29c62b11707fe54dfb44c",
"assets/assets/images/2x/delete_photo.png": "f94cddb6c3d44984eab33c7eeba93c3b",
"assets/assets/images/2x/cellular_connect.png": "73544836f5e6e7f008d53eac9e2f8dc4",
"assets/assets/images/2x/youtube.png": "deacaa08629fbdcb9233c4a1f550226f",
"assets/assets/images/2x/star.png": "98194fdaa58a60bfa35cac7862f264ce",
"assets/assets/images/2x/vkontakte.png": "657cea42a7238f5ef07a7e23916bf6d2",
"assets/assets/images/2x/save.png": "3c50918ec59994bbf7b6662a6533714f",
"assets/assets/images/save.png": "ce76f6f11ed250f27cde97237c43761e",
"assets/assets/icons/instagram.svg": "3b6e39e458fc93687c2bccd9a7d0467a",
"assets/assets/icons/cars/moto.svg": "29cf17040b9ba50c769d550ebc7403c1",
"assets/assets/icons/cars/toyotaCamry2007.svg": "e8fbf1724b1a752ba0889438b1478b37",
"assets/assets/icons/cars/vwT5.svg": "741373e5b498129c99257ff585e19949",
"assets/assets/icons/cars/rimorSEAL50.svg": "aa35fa363dbd0aeb75453c469ef9728f",
"assets/assets/icons/cars/landRoverFreelander.svg": "97ffe5eff782a623d8f519614614f941",
"assets/assets/icons/cars/trailer.svg": "d9f0d164f2361c229e4831c850356b88",
"assets/assets/icons/cars/type_1.svg": "216deb328c4528211cd69a8a461d90a9",
"assets/assets/icons/cars/toyotaHilux2005.svg": "e9064274fb35087a8a5a7c8b69f291ae",
"assets/assets/icons/avatar.svg": "7d69a3667f069298b4a194256c3bde4c",
"assets/assets/fonts/GoVanlifeHobbiesIcons.ttf": "f0df6d41fa819f411f0126b243916fcd",
"assets/assets/fonts/GoVanlifeTermsIcons.ttf": "9ee1785d7eaeca10df1d07c5212bfa0b",
"assets/assets/fonts/GoVanlifeConveniencesIcons.ttf": "219cda3e3ec9cd9bf46b3371ad83347a",
"assets/assets/fonts/GoVanlifeAvailabilityIcons.ttf": "013ddbea7b79a3b0ac58520ab6bdcc1b",
"assets/assets/fonts/GoVanlifeServiceIcons.ttf": "08f6db4a1479e67184876d7c5c9650f6",
"assets/assets/fonts/GoVanlifeRoadIcons.ttf": "0e86ae0e505c18b428cdb4a3ab00c49c",
"assets/assets/fonts/GoVanlifeEntertainmentIcons.ttf": "5eb4011601e56fbd5ffa4d33414f5682",
"assets/assets/fonts/GoVanlifeCommonIcons.ttf": "c17b2c6160b50fe5062aa4a3dd92d3b8",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
