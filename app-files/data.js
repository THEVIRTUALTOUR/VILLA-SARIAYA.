var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
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
        "yaw": 0.25189743129100606,
        "pitch": 0.011875130024979086,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.03521918486304543,
          "pitch": 0.21519342736705482,
          "rotation": 0,
          "target": "1-grand-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.25133420865320844,
          "pitch": -0.026575321421686837,
          "title": "Entrance",
          "text": "The entrace of Villa Sariaya Ancestral Homes"
        }
      ]
    },
    {
      "id": "1-grand-entrance",
      "name": "Grand Entrance",
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
        "yaw": 0.08528221548825599,
        "pitch": 0.020575362635957717,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -3.120553596676471,
          "pitch": 0.39698296331072136,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -1.5834906372458022,
          "pitch": 0.2541628655903114,
          "rotation": 0,
          "target": "2-living-room-1"
        },
        {
          "yaw": 1.0601852479362623,
          "pitch": 0.1751184755242523,
          "rotation": 5.497787143782138,
          "target": "13-old-kitchen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.23567174984472317,
          "pitch": 0.016558503689857673,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-living-room-1",
      "name": "Living Room 1",
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
        "yaw": -1.3250095404872724,
        "pitch": -0.04255135198581428,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.4745537844853054,
          "pitch": 0.4830280475495794,
          "rotation": 0,
          "target": "1-grand-entrance"
        },
        {
          "yaw": -0.36138060207615297,
          "pitch": 0.3123737640020714,
          "rotation": 7.0685834705770345,
          "target": "3-living-room-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.39087164289311715,
          "pitch": 0.043519810997931785,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-living-room-2",
      "name": "Living Room 2",
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
        "yaw": 0.07123792865282397,
        "pitch": -0.0275139674525402,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 3.069972176608881,
          "pitch": 0.38819729822191995,
          "rotation": 0,
          "target": "2-living-room-1"
        },
        {
          "yaw": 0.22983333984712573,
          "pitch": 0.22540601349260392,
          "rotation": 0,
          "target": "4-old-grand-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-old-grand-entrance",
      "name": "Old Grand Entrance",
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
        "yaw": 1.6277270511500106,
        "pitch": 0.08771744531819259,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.0555320126308487,
          "pitch": 0.3763005641804522,
          "rotation": 0,
          "target": "3-living-room-2"
        },
        {
          "yaw": 1.888969724537577,
          "pitch": 0.12463938201167579,
          "rotation": 0,
          "target": "8-grand-staircase"
        },
        {
          "yaw": 1.3747242686883698,
          "pitch": 0.33071157596646117,
          "rotation": 0.7853981633974483,
          "target": "5-traditional-costumes"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-traditional-costumes",
      "name": "Traditional Costumes",
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
        "yaw": 1.526272621386875,
        "pitch": 0.035042289870659715,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.6987811937465729,
          "pitch": 0.1867888861867968,
          "rotation": 0,
          "target": "4-old-grand-entrance"
        },
        {
          "yaw": 1.6764214915305962,
          "pitch": 0.27248851675251196,
          "rotation": 0,
          "target": "6-room7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-room7",
      "name": "room7",
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
        "yaw": 1.5583372611782877,
        "pitch": 0.0926153133762071,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.4785846115204855,
          "pitch": 0.2935670835392976,
          "rotation": 0,
          "target": "5-traditional-costumes"
        },
        {
          "yaw": 1.5384602054084189,
          "pitch": 0.2929710520176112,
          "rotation": 6.283185307179586,
          "target": "7-room8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-room8",
      "name": "room8",
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
        "yaw": 1.4246628001787585,
        "pitch": -0.07626317661176074,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.422058533661568,
          "pitch": 0.3650196250826596,
          "rotation": 0,
          "target": "6-room7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-grand-staircase",
      "name": "Grand Staircase",
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
          "yaw": -2.947521111415684,
          "pitch": 0.7037032777032746,
          "rotation": 0,
          "target": "4-old-grand-entrance"
        },
        {
          "yaw": -0.05320581194523655,
          "pitch": 0.22886025215729688,
          "rotation": 11.780972450961727,
          "target": "9-main-living-room"
        },
        {
          "yaw": -2.1839280826790635,
          "pitch": 0.318840463973018,
          "rotation": 10.995574287564278,
          "target": "10-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-main-living-room",
      "name": "Main Living Room",
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
          "yaw": -1.8946218480574082,
          "pitch": 0.22887454660771667,
          "rotation": 0,
          "target": "8-grand-staircase"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bedroom",
      "name": "Bedroom",
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
          "yaw": 1.6547075478643762,
          "pitch": 0.18435223575542636,
          "rotation": 0,
          "target": "8-grand-staircase"
        },
        {
          "yaw": -1.6635412280426856,
          "pitch": 0.22317127248377489,
          "rotation": 0,
          "target": "12-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-room12",
      "name": "room12",
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
          "yaw": 1.477986589014888,
          "pitch": 0.25502767253995273,
          "rotation": 0,
          "target": "10-bedroom"
        },
        {
          "yaw": -1.6518533654065308,
          "pitch": 0.25658497830644933,
          "rotation": 0,
          "target": "12-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-kitchen",
      "name": "Kitchen",
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
          "yaw": 1.4162272153659394,
          "pitch": 0.21384726117704922,
          "rotation": 0,
          "target": "11-room12"
        },
        {
          "yaw": -3.11356645040161,
          "pitch": 0.31405929824473233,
          "rotation": 0,
          "target": "13-old-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-old-kitchen",
      "name": "Old Kitchen",
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
          "yaw": 0.7611577605362463,
          "pitch": 0.2994160567501023,
          "rotation": 0,
          "target": "12-kitchen"
        },
        {
          "yaw": 1.659066526368349,
          "pitch": 0.5889236381111385,
          "rotation": 1.5707963267948966,
          "target": "1-grand-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Villa Sariaya Ancestral Homes",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
