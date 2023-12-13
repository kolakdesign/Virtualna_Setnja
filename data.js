var APP_DATA = {
  "scenes": [
    {
      "id": "0-blagovaonica",
      "name": "Blagovaonica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.105408335041112,
          "pitch": 0.1417976378167758,
          "rotation": 0,
          "target": "1-dnevni-boravak"
        },
        {
          "yaw": 2.8818163935299497,
          "pitch": 0.12576417598911682,
          "rotation": 0,
          "target": "2-kuhinja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dnevni-boravak",
      "name": "Dnevni boravak",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.044156250957028575,
          "pitch": 0.09389254978678707,
          "rotation": 0,
          "target": "0-blagovaonica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kuhinja",
      "name": "Kuhinja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07643818168577354,
          "pitch": 0.13717523832642442,
          "rotation": 0,
          "target": "0-blagovaonica"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
