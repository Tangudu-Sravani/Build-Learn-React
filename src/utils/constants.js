//multiple exports from same file
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_220/";
export  const LOGO_URL = "https://cdn.pixabay.com/photo/2017/02/17/17/33/food-2074638_960_720.png"; 
 export const MENU_API ="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=";

 export const sampleRestroPageJson = {
  "statusCode": 0,
  "data": {
    "statusMessage": "done successfully",
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            "text": "Ambur Star Briyani Since 1890",
            "headerStyling": {
              "textColor": "text_Highest_Emphasis",
              "textVariant": "header_H3_Black"
            }
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            "tabs": [
              {
                "id": "Order Online",
                "title": "Order Online"
              }
            ]
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "108097",
              "name": "Ambur Star Briyani Since 1890",
              "city": "Bangalore",
              "slugs": {
                "restaurant": "ambur-star-briyani-btm-2",
                "city": "bangalore"
              },
              "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/12/bee2f2d5-6a39-477a-b669-c9df142ed5d0_108097.jpg",
              "locality": "2nd Stage",
              "areaName": "BTM Layout",
              "costForTwo": "50000",
              "costForTwoMessage": "₹500 for two",
              "cuisines": [
                "Biryani",
                "Chettinad"
              ],
              "avgRating": 4.4,
              "feeDetails": {
                "restaurantId": "108097",
                "fees": [
                  {

                  }
                ]
              },
              "parentId": "21400",
              "avgRatingString": "4.4",
              "totalRatingsString": "25K+ ratings",
              "sla": {
                "restaurantId": "108097",
                "deliveryTime": 50,
                "minDeliveryTime": 50,
                "maxDeliveryTime": 60,
                "lastMileTravel": 8.8,
                "serviceability": "SERVICEABLE",
                "stressFactor": 1,
                "rainMode": "RAIN_MODE_NONE",
                "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
                "zoneId": 4,
                "slaString": "50-60 MINS",
                "lastMileTravelString": "8.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-04-13 00:00:00",
                "visibility": true,
                "opened": true,
                "restaurantClosedMeta": {

                }
              },
              "aggregatedDiscountInfo": {
                "header": "Get items under 40",
                "shortDescriptionList": [
                  {
                    "meta": "99 store",
                    "discountType": "FinalPrice",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "99 store",
                    "discountType": "FinalPrice",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "10% off upto ₹100|Use HSBC100 Above ₹799",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "visible": true
              },
              "badges": {

              },
              "slugString": "ambur-star-briyani-btm-2",
              "multiOutlet": true,
              "isOpen": true,
              "labels": [
                {
                  "title": "Timings",
                  "message": "null"
                },
                {
                  "title": "Address",
                  "message": "9, outer ring road,kuvembu nagar,btm 2stage,near udupi garden signal.bengaluru-560076"
                },
                {
                  "title": "Cuisines",
                  "message": "Biryani,Chettinad"
                }
              ],
              "totalRatings": 25000,
              "aggregatedDiscountInfoV2": {
                "header": "Get items under 40",
                "shortDescriptionList": [
                  {
                    "meta": "99 store",
                    "discountType": "FinalPrice",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "99 store",
                    "discountType": "FinalPrice",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "10% off upto ₹100|Use HSBC100 Above ₹799",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "couponDetailsCta": "View coupon details"
              },
              "type": "F",
              "nudgeBanners": [
                {
                  "priority": 4,
                  "discountInfo": {
                    "discountType": "FinalPrice",
                    "value": 149
                  },
                  "unlockedMessage": "Deal of the Day unlocked!",
                  "minItemCount": 1,
                  "maxItemCount": 1,
                  "type": "SILD",
                  "nudgeTagInfo": {
                    "title": "Deal of the Day",
                    "fontName": "FONT_NAME_CONDENSED_BOLD"
                  },
                  "logoCtx": {

                  },
                  "movComputationType": "MOV_COMPUTATION_TYPE_DISCOUNTED_PRICE"
                }
              ],
              "headerBanner": {
                "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/108097"
              },
              "generalPurposeInfoListV2": [
                {
                  "cta": {
                    "info": {
                      "recordings": {

                      }
                    },
                    "linkCta": {

                    }
                  }
                }
              ],
              "ratingSlab": "RATING_SLAB_5",
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "hasBestsellerItems": true,
              "nearestOutletNudge": {
                "nearestOutletInfo": {
                  "siblingOutlet": {
                    "id": "651231",
                    "city": "0",
                    "slugs": {

                    },
                    "areaName": "Sanjay Nagar, New BEL Road",
                    "costForTwo": "0",
                    "feeDetails": {

                    },
                    "sla": {
                      "deliveryTime": 39,
                      "lastMileTravel": 7.1,
                      "slaString": "39 MINS",
                      "lastMileTravelString": "7.1 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "restaurantClosedMeta": {

                      }
                    },
                    "aggregatedDiscountInfo": {
                      "visible": true
                    },
                    "badges": {

                    },
                    "aggregatedDiscountInfoV2": {
                      "visible": true
                    },
                    "availabilityServiceabilityMessage": "Temporarily closed for delivery",
                    "cartOrderabilityNudgeBanner": {
                      "parameters": {

                      },
                      "presentation": {

                      }
                    },
                    "featuredSectionInfo": {

                    }
                  }
                },
                "nearestOutletComms": {
                  "title": {
                    "text": "Get your order 11 min faster"
                  },
                  "subTitle": {
                    "text": "Switch to the faster outlet"
                  }
                }
              },
              "cartOrderabilityNudgeBanner": {
                "parameters": {

                },
                "presentation": {

                }
              },
              "latLong": "12.91629,77.61130200000002",
              "backgroundImageOverlayInfo": {

              },
              "featuredSectionInfo": {

              },
              "requestContexts": [
                "enable_ecosaver",
                "99store"
              ]
            },
            "analytics": {

            }
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_CHECK_ORDERABILITY_AND_SHOW_MENU_OFFER_NUDGE",
            "sectionId": "MENU_ITEM_CART_UPDATE_POP_CROUTON"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "layout": {
              "rows": 1,
              "columns": 5,
              "horizontalScrollEnabled": true,
              "itemSpacing": 12,
              "lineSpacing": 10,
              "widgetPadding": {

              },
              "containerStyle": {
                "containerPadding": {
                  "left": 10,
                  "right": 10,
                  "bottom": 16
                }
              }
            },
            "id": "offerCollectionWidget_UX4",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                "offers": [
                  {
                    "info": {
                      "header": "Extra ₹50 off",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2026/1/12/96c82e26-2baa-4216-985d-f97a215fdde2_d07196b25b85d1fd9951e10c255ab737.avif",
                      "offerIds": [
                        "69df6186-ab25-487e-9f2e-641db8e74228"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "description": "NO CODE REQUIRED | ABOVE ₹299",
                      "offerType": "offers",
                      "restId": "108097",
                      "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2026/1/12/96c82e26-2baa-4216-985d-f97a215fdde2_d07196b25b85d1fd9951e10c255ab737.avif",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "ITEMS AT ₹40",
                      "offerTag": "DEAL OF DAY",
                      "offerTagColor": "#E46D47",
                      "offerIds": [
                        "db0fe48b-918a-4e07-8023-2de526e36031"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "description": "ON SELECT ITEMS |",
                      "offerType": "offers",
                      "restId": "108097",
                      "offerLogo": "offers/deal-of-day",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "10% OFF UPTO ₹100",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2026/4/2/48c8188d-0a4b-467d-9f99-79a851ea2ee7_HSBC.png",
                      "offerIds": [
                        "90a932be-31df-417c-8b14-a4f616877e37"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE HSBC100",
                      "description": "ABOVE ₹799",
                      "offerType": "offers",
                      "restId": "108097",
                      "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2026/4/2/48c8188d-0a4b-467d-9f99-79a851ea2ee7_HSBC.png",
                      "descriptionTextColor": "#7302060C",
                      "primaryDescription": "USE HSBC100"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "10% OFF UPTO ₹75",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2026/4/1/c8c7546a-a2e6-4866-88ef-a5f7201822e8_Visa.png",
                      "offerIds": [
                        "49b4cc8e-3a16-442c-9dae-9df87369b3ac"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE VISAPLATINUMDC",
                      "description": "ABOVE ₹300",
                      "offerType": "offers",
                      "restId": "108097",
                      "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2026/4/1/c8c7546a-a2e6-4866-88ef-a5f7201822e8_Visa.png",
                      "descriptionTextColor": "#7302060C",
                      "primaryDescription": "USE VISAPLATINUMDC"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "FLAT ₹150 OFF",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2026/3/31/ffbcba46-2ab0-4ac3-888f-ed3abd69dd2e_Axis.png",
                      "offerIds": [
                        "d5748402-854d-4cd2-a232-6ae9be2edd08"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE AXISREWARDS",
                      "description": "ABOVE ₹500",
                      "offerType": "offers",
                      "restId": "108097",
                      "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2026/3/31/ffbcba46-2ab0-4ac3-888f-ed3abd69dd2e_Axis.png",
                      "descriptionTextColor": "#7302060C",
                      "primaryDescription": "USE AXISREWARDS"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  }
                ],
                "habitMilestoneInfo": {
                  "callout": {

                  }
                },
                "loyaltyDiscoverPresentationInfo": {
                  "logoCtx": {

                  }
                }
              }
            }
          }
        }
      },
      {
        "groupedCard": {
          "cardGroupMap": {
            "REGULAR": {
              "cards": [
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      "badges": {

                      },
                      "vegOnlyDetails": {
                        "imageId": "AutoVegOnly_qkjowj",
                        "title": "Showing only vegetarian options.",
                        "description": "Tap on the VEG ONLY button to turn off the setting"
                      },
                      "topRatedFilter": {
                        "attributes": {
                          "displayText": "Ratings 4.0+"
                        }
                      },
                      "kidsCategoryFilter": {
                        "attributes": {
                          "displayText": "Kids Favourites",
                          "tooltip": {
                            "enabled": true,
                            "displayText": "Kids Favourites Filter applied. Remove this filter to see the full Menu."
                          }
                        }
                      },
                      "vegFilter": {
                        "attributes": {
                          "displayText": "VEG"
                        }
                      },
                      "nonvegFilter": {
                        "attributes": {
                          "displayText": "NONVEG"
                        }
                      }
                    },
                    "relevance": {
                      "type": "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      "sectionId": "MENU_FILTER_TOGGLE"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Recommended",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "29830958",
                              "name": "Ambur Chicken Dum Biryani",
                              "category": "Our Traditional Briyani",
                              "description": "(600gm Serves 1) Traditional Ambur style Chicken Dum Biryani, cooked with hand grounded spices and jeera samba rice in low flame to make it juicy and aromatic. Served with Raita and Brinjal curry.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/0f26fc1d-4055-4700-84df-503c9473ea59_049e26a5-47b6-4c7a-85a5-7e4159f254ff.jpg",
                              "inStock": 1,
                              "price": 33900,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "209046211",
                                  "groupName": "Extra Chicken 65 (boneless)",
                                  "choices": [
                                    {
                                      "id": "134957372",
                                      "name": "Chicken 65 (boneless)",
                                      "price": 24900,
                                      "inStock": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "209046212",
                                  "groupName": "Extra Chicken Kebab",
                                  "choices": [
                                    {
                                      "id": "134957371",
                                      "name": "Chicken Kebab",
                                      "price": 23900,
                                      "inStock": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "209046213",
                                  "groupName": "Addons",
                                  "choices": [
                                    {
                                      "id": "134957370",
                                      "name": "Raita",
                                      "price": 2000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "showImage": true,
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "1914 ratings",
                                  "ratingCountV2": "1.9K+"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "89676519",
                              "menuFilterIds": [
                                "bestseller",
                                "NONVEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "29830957",
                              "name": "Ambur Mutton Dum Biryani",
                              "category": "Our Traditional Briyani",
                              "description": "(600gm Serves 1) Traditional Ambur Style Mutton Dum Biryani, cooked with hand grounded spices, jeera samba rice using medium spiced tender lamb pieces in low flame to make it juicier & tastier. Served with Raita and Brinjal curry.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/6aa31197-769b-4d46-aabe-dac4aa1b47d2_fe4708f2-8937-4d5d-8e89-67a3a0129cb2.jpg",
                              "inStock": 1,
                              "price": 44900,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "209046220",
                                  "groupName": "Extra Chicken 65 (boneless)",
                                  "choices": [
                                    {
                                      "id": "134957372",
                                      "name": "Chicken 65 (boneless)",
                                      "price": 24900,
                                      "inStock": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "209046221",
                                  "groupName": "Extra Chicken Kebab",
                                  "choices": [
                                    {
                                      "id": "134957371",
                                      "name": "Chicken Kebab",
                                      "price": 23900,
                                      "inStock": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "209046222",
                                  "groupName": "Addons",
                                  "choices": [
                                    {
                                      "id": "134957370",
                                      "name": "Raita",
                                      "price": 2000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "showImage": true,
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "1649 ratings",
                                  "ratingCountV2": "1.6K+"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "imageBadges": [
                                {
                                  "imageId": "merch_bau/High%20Protein%201_1.png"
                                }
                              ],
                              "parentId": "89676522",
                              "menuFilterIds": [
                                "EATRIGHT",
                                "bestseller",
                                "NONVEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "29830971",
                              "name": "Chicken Pepper Fry",
                              "category": "Starters",
                              "description": "A simple spicy chicken fry made with freshly ground pepper and spices.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/4ec1b158-e663-45a6-ba30-2e48d3f86804_5aeecc1b-00d4-4fc7-a4c9-6c50c3696189.jpg",
                              "inStock": 1,
                              "price": 31800,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {

                              },
                              "showImage": true,
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "492 ratings",
                                  "ratingCountV2": "492"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "18087935",
                              "menuFilterIds": [
                                "NONVEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "29830972",
                              "name": "Chicken Sukka",
                              "category": "Starters",
                              "description": "Boneless chicken chunks hosted in dry masalas bringing it to a fine taste.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/e9d61bd0-effd-4fc9-aeb3-d377f89b9996_45814b75-3069-430e-bbbf-480e8f6b56b9.jpg",
                              "inStock": 1,
                              "price": 31800,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "showImage": true,
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "394 ratings",
                                  "ratingCountV2": "394"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "18087950",
                              "menuFilterIds": [
                                "bestseller",
                                "NONVEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "51310441",
                              "name": "Chicken 65 (boneless)",
                              "category": "Starters",
                              "description": "A medium spicy, deep-fried chicken piece perfectly cooked with different spices.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/f8e99d6e-ccd8-4fb1-abaa-eb8adf2ec315_ff8f6119-8139-4a05-9c1d-fb64b2beb709.jpg",
                              "inStock": 1,
                              "price": 27400,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "showImage": true,
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "1775 ratings",
                                  "ratingCountV2": "1.8K+"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "18087862",
                              "menuFilterIds": [
                                "bestseller",
                                "NONVEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "51310443",
                              "name": "Chicken Lolly Pop",
                              "category": "Starters",
                              "description": "| 4 Pcs | A hot and spicy appetizer made with drummettes of chicken with added special masalas.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/cf84ba50-759f-43fa-b0a1-15a642ed147c_02d14a0e-cd6a-4b40-aee2-f29fc683f4bc.jpg",
                              "inStock": 1,
                              "price": 31800,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {

                              },
                              "showImage": true,
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "931 ratings",
                                  "ratingCountV2": "931"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "18087918",
                              "menuFilterIds": [
                                "NONVEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "type": "CATEGORY_TYPE_RECOMMENDED",
                      "subtitleSuffix": {

                      },
                      "categoryId": "-1"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Our Traditional Briyani",
                      "categories": [
                        {
                          "title": "Briyani",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "29830958",
                                  "name": "Ambur Chicken Dum Biryani",
                                  "category": "Our Traditional Briyani",
                                  "description": "(600gm Serves 1) Traditional Ambur style Chicken Dum Biryani, cooked with hand grounded spices and jeera samba rice in low flame to make it juicy and aromatic. Served with Raita and Brinjal curry.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/0f26fc1d-4055-4700-84df-503c9473ea59_049e26a5-47b6-4c7a-85a5-7e4159f254ff.jpg",
                                  "inStock": 1,
                                  "price": 33900,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "addons": [
                                    {
                                      "groupId": "209046211",
                                      "groupName": "Extra Chicken 65 (boneless)",
                                      "choices": [
                                        {
                                          "id": "134957372",
                                          "name": "Chicken 65 (boneless)",
                                          "price": 24900,
                                          "inStock": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "209046212",
                                      "groupName": "Extra Chicken Kebab",
                                      "choices": [
                                        {
                                          "id": "134957371",
                                          "name": "Chicken Kebab",
                                          "price": 23900,
                                          "inStock": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "209046213",
                                      "groupName": "Addons",
                                      "choices": [
                                        {
                                          "id": "134957370",
                                          "name": "Raita",
                                          "price": 2000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "1914 ratings",
                                      "ratingCountV2": "1.9K+"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "89676519",
                                  "menuFilterIds": [
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "29830957",
                                  "name": "Ambur Mutton Dum Biryani",
                                  "category": "Our Traditional Briyani",
                                  "description": "(600gm Serves 1) Traditional Ambur Style Mutton Dum Biryani, cooked with hand grounded spices, jeera samba rice using medium spiced tender lamb pieces in low flame to make it juicier & tastier. Served with Raita and Brinjal curry.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/6aa31197-769b-4d46-aabe-dac4aa1b47d2_fe4708f2-8937-4d5d-8e89-67a3a0129cb2.jpg",
                                  "inStock": 1,
                                  "price": 44900,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "addons": [
                                    {
                                      "groupId": "209046220",
                                      "groupName": "Extra Chicken 65 (boneless)",
                                      "choices": [
                                        {
                                          "id": "134957372",
                                          "name": "Chicken 65 (boneless)",
                                          "price": 24900,
                                          "inStock": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "209046221",
                                      "groupName": "Extra Chicken Kebab",
                                      "choices": [
                                        {
                                          "id": "134957371",
                                          "name": "Chicken Kebab",
                                          "price": 23900,
                                          "inStock": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "209046222",
                                      "groupName": "Addons",
                                      "choices": [
                                        {
                                          "id": "134957370",
                                          "name": "Raita",
                                          "price": 2000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "1649 ratings",
                                      "ratingCountV2": "1.6K+"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "imageBadges": [
                                    {
                                      "imageId": "merch_bau/High%20Protein%201_1.png"
                                    }
                                  ],
                                  "parentId": "89676522",
                                  "menuFilterIds": [
                                    "EATRIGHT",
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "114322463",
                                  "name": "Ambur Biryani Rice (kushka)",
                                  "category": "Our Traditional Briyani",
                                  "description": "(600gm Serves 1) Plain Biryani Rice taken from Non Veg biryani Rice. Served with Raita and Brinjal curry.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/a1e85018-97c1-4b38-a17d-981b65da29a9_21185b2d-4865-4477-bb48-853d9222799c.jpg",
                                  "price": 27500,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "addons": [
                                    {
                                      "groupId": "209046210",
                                      "groupName": "Addons",
                                      "choices": [
                                        {
                                          "id": "134957370",
                                          "name": "Raita",
                                          "price": 2000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "nextAvailableAtMessage": "Next available at 11:29 pm, today",
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "170 ratings",
                                      "ratingCountV2": "170"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "89676517",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "29830961",
                                  "name": "Ambur Chicken 65 Biryani",
                                  "category": "Our Traditional Briyani",
                                  "description": "(600gm Serves 1) Our Chicken 65 Biryani is served along with Non Veg Biryani Rice and 5 pieces of Deep Fried Chicken. Served with Raita and Brinjal curry.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/a32819d6-b2c6-4d53-a29a-2e3026a643fa_06c635e0-1a71-4a2f-8e68-84e6d2da755b.jpg",
                                  "price": 41900,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "addons": [
                                    {
                                      "groupId": "209046214",
                                      "groupName": "Extra Chicken 65 (boneless)",
                                      "choices": [
                                        {
                                          "id": "134957372",
                                          "name": "Chicken 65 (boneless)",
                                          "price": 24900,
                                          "inStock": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "209046215",
                                      "groupName": "Extra Chicken Kebab",
                                      "choices": [
                                        {
                                          "id": "134957371",
                                          "name": "Chicken Kebab",
                                          "price": 23900,
                                          "inStock": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "209046216",
                                      "groupName": "Addons",
                                      "choices": [
                                        {
                                          "id": "134957370",
                                          "name": "Raita",
                                          "price": 2000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "nextAvailableAtMessage": "Next available at 11:29 pm, today",
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "123 ratings",
                                      "ratingCountV2": "123"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "89676518",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ],
                          "subtitleSuffix": {

                          },
                          "categoryId": "59965587"
                        },
                        {
                          "title": "Bucket Briyani's",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "73792797",
                                  "name": "Chciken Bucket Biryani Mini",
                                  "category": "Our Traditional Briyani",
                                  "description": "(Serves 3 Pax) Enjoy the family pack  of our traditional Ambur style Chicken Dum Biryani served along with Raita and Brinjal curry.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/9541ca6a-30f7-4922-a6e4-d440403b8e13_4f566259-90d1-4ee9-92da-abfd71afcfb9.jpg",
                                  "inStock": 1,
                                  "price": 107900,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "addons": [
                                    {
                                      "groupId": "209046223",
                                      "groupName": "Extra Chicken 65 (boneless)",
                                      "choices": [
                                        {
                                          "id": "134957372",
                                          "name": "Chicken 65 (boneless)",
                                          "price": 24900,
                                          "inStock": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "209046224",
                                      "groupName": "Extra Chicken Kebab",
                                      "choices": [
                                        {
                                          "id": "134957371",
                                          "name": "Chicken Kebab",
                                          "price": 23900,
                                          "inStock": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "209046225",
                                      "groupName": "Addons",
                                      "choices": [
                                        {
                                          "id": "134957370",
                                          "name": "Raita",
                                          "price": 2000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "5.0",
                                      "ratingCount": "7 ratings",
                                      "ratingCountV2": "7"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "99939540",
                                  "menuFilterIds": [
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "73792798",
                                  "name": "Mutton Bucket Biryani Mini",
                                  "category": "Our Traditional Briyani",
                                  "description": "(Serves 3 Pax) Enjoy the family pack  of our traditional Ambur style Mutton Dum Biryani served along with Raita and Brinjal curry.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/29793822-f0b7-4e6e-9911-16d782371cf4_33a0ac5e-13c6-4921-899c-55735ab4f3e7.jpg",
                                  "inStock": 1,
                                  "price": 135500,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "addons": [
                                    {
                                      "groupId": "209046226",
                                      "groupName": "Extra Chicken 65 (boneless)",
                                      "choices": [
                                        {
                                          "id": "134957372",
                                          "name": "Chicken 65 (boneless)",
                                          "price": 24900,
                                          "inStock": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "209046227",
                                      "groupName": "Extra Chicken Kebab",
                                      "choices": [
                                        {
                                          "id": "134957371",
                                          "name": "Chicken Kebab",
                                          "price": 23900,
                                          "inStock": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "209046228",
                                      "groupName": "Addons",
                                      "choices": [
                                        {
                                          "id": "134957370",
                                          "name": "Raita",
                                          "price": 2000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.0",
                                      "ratingCount": "8 ratings",
                                      "ratingCountV2": "8"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "55239770",
                                  "menuFilterIds": [
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "73793298",
                                  "name": "Chicken Bucket Biryani Large",
                                  "category": "Our Traditional Briyani",
                                  "description": "(Serves 7-8 Pax) Enjoy the family pack of our traditional Ambur style Chicken Dum Biryani served along with Raita and Brinjal curry.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/aa1e2894-24ff-46ae-ab05-8206c9a0986b_c9f59558-3f1e-4296-9fed-d4737f8ad050.jpg",
                                  "inStock": 1,
                                  "price": 236900,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "40 ratings",
                                      "ratingCountV2": "40"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "55239762",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "73793299",
                                  "name": "Mutton Bucket Biryani Large",
                                  "category": "Our Traditional Briyani",
                                  "description": "Serves 5 | (Serves 7-8 Pax) Enjoy the family pack  of our traditional Ambur style Mutton Dum Biryani served along with Raita and Brinjal curry.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/a5098f30-0745-49f6-93e4-5f2ff53c8507_faa1383c-8334-4c29-bb3c-36cc7e5c0353.jpg",
                                  "inStock": 1,
                                  "price": 303000,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG",
                                    "portionSize": "Serves 5"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "30 ratings",
                                      "ratingCountV2": "30"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "55239769",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ],
                          "subtitleSuffix": {

                          },
                          "categoryId": "59965588"
                        }
                      ],
                      "image": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/a1e85018-97c1-4b38-a17d-981b65da29a9_21185b2d-4865-4477-bb48-853d9222799c.jpg",
                      "categoryId": "59965578"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Starters",
                      "categories": [
                        {
                          "title": "Non Veg Soups",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "73733035",
                                  "name": "Aatu Kaal Soup",
                                  "category": "Starters",
                                  "description": "A healthy goat leg soup cooked in a very traditional way having the finest spicy taste using crushed peppers.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/be456eb6-9dcc-4190-bb97-14b2c3b3b8c1_cc61217a-76fe-4fb6-a681-fe5d9a4ffaa5.jpg",
                                  "inStock": 1,
                                  "price": 15300,
                                  "finalPrice": 11900,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "offerTags": [
                                    {
                                      "matchText": "SILD"
                                    }
                                  ],
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "itemNudgeType": "FinalPrice",
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "229 ratings",
                                      "ratingCountV2": "229"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "cartContext": "quick_prep",
                                  "imageBadges": [
                                    {
                                      "imageId": "merch_bau/High%20Protein%201_1.png"
                                    },
                                    {
                                      "imageId": "Low%20cal/Low%20cal%201_1.png"
                                    }
                                  ],
                                  "offerIds": [
                                    "e33b1e32-5497-41a3-a210-98b5f27a93b3"
                                  ],
                                  "isNinetyninestoreItem": true,
                                  "parentId": "18087800",
                                  "menuFilterIds": [
                                    "EATRIGHT",
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ],
                          "subtitleSuffix": {

                          },
                          "categoryId": "59965589"
                        },
                        {
                          "title": "Non Veg Special Starters",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127626945",
                                  "name": "Chicken Varuval",
                                  "category": "Starters",
                                  "description": "Seared \"Varuval\" country-style chicken masala in the village spice blend",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/f373c347-319c-4052-ab79-e0ee13e0935d_79ec1d9c-2afd-4a7e-9b14-d4d68701051c.jpg",
                                  "inStock": 1,
                                  "price": 31800,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "22 ratings",
                                      "ratingCountV2": "22"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "49465989",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127626946",
                                  "name": "Mutton Ghee Roast",
                                  "category": "Starters",
                                  "description": "Tawa fried mutton topped with ground pepper and special masalas with ghee flavor.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/1dbe016f-aff1-45fe-81cd-4d4d92e66604_19ba15c9-1074-4915-95c9-36f1e8589a04.jpg",
                                  "inStock": 1,
                                  "price": 39600,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.0",
                                      "ratingCount": "26 ratings",
                                      "ratingCountV2": "26"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "49588436",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127626947",
                                  "name": "Mutton Liver Fry",
                                  "category": "Starters",
                                  "description": "A dry mixture of spices and liver together combined with powdered black pepper, pearl onions and other masalas.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/a548fb31-11e4-4f07-b73d-f48fe73d5725_279dbd36-a054-4009-8eeb-f403502f6349.jpg",
                                  "inStock": 1,
                                  "price": 30800,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "101 ratings",
                                      "ratingCountV2": "101"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "18088241",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127626948",
                                  "name": "Prawn Varuval",
                                  "category": "Starters",
                                  "description": "Shallow stir-fried dish with the basic spices and other sauteed chettinad masala.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/5ac55da2-506e-47ac-99ed-3029caf93f7f_3c91213f-d0f7-4aa0-ab85-f8bd3ebb0bca.jpg",
                                  "inStock": 1,
                                  "price": 37400,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.9",
                                      "ratingCount": "52 ratings",
                                      "ratingCountV2": "52"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#D9EFEC",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_medium",
                                      "ratingTextColor": "rating_medium",
                                      "ratingCountTextColor": "rating_medium",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "45091683",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "29830965",
                                  "name": "Mutton Boti Fry",
                                  "category": "Starters",
                                  "description": "Made by using mutton gizzards and intestines boiled, fried in a variety of spices giving an aromatic chettinad flavor.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/fe9fab20-58af-457c-a14f-a9c444353c05_6ce49791-7cac-4f72-b586-26879f2eeb81.jpg",
                                  "inStock": 1,
                                  "price": 31800,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCount": "161 ratings",
                                      "ratingCountV2": "161"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "18088208",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127626949",
                                  "name": "Ambur Chicken Dry",
                                  "category": "Starters",
                                  "description": "Traditional Ambur Style Chicken fry based with red chilli paste spicy 5-6 pieces",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/ce3266a0-2bcd-4069-9c92-ee355cc7748a_12d73b07-24b4-4e99-b6cc-9d1a6c779451.jpg",
                                  "inStock": 1,
                                  "price": 31800,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "22 ratings",
                                      "ratingCountV2": "22"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "18087808",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "73733039",
                                  "name": "Mutton Pepper Fry",
                                  "category": "Starters",
                                  "description": "Fried pepper masala coated with lamb pieces and saut",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/704e844b-0896-412f-8dda-4a6fb14a0c0f_bdaea490-70e4-406f-bc7a-b4054152d27e.jpg",
                                  "inStock": 1,
                                  "price": 39600,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "75 ratings",
                                      "ratingCountV2": "75"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "18088252",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "73733040",
                                  "name": "Mutton Varuval",
                                  "category": "Starters",
                                  "description": "Dry roasted spices are powdered and added to the sauteed masala giving an aromatic flavor.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/9d3f76ff-0df7-44e0-89a8-7d5e2211134c_3b69392b-425d-403e-a585-0ac59cc56761.jpg",
                                  "inStock": 1,
                                  "price": 39600,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.0",
                                      "ratingCount": "49 ratings",
                                      "ratingCountV2": "49"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#D9EFEC",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_medium",
                                      "ratingTextColor": "rating_medium",
                                      "ratingCountTextColor": "rating_medium",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "18088262",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "29830971",
                                  "name": "Chicken Pepper Fry",
                                  "category": "Starters",
                                  "description": "A simple spicy chicken fry made with freshly ground pepper and spices.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/4ec1b158-e663-45a6-ba30-2e48d3f86804_5aeecc1b-00d4-4fc7-a4c9-6c50c3696189.jpg",
                                  "inStock": 1,
                                  "price": 31800,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "492 ratings",
                                      "ratingCountV2": "492"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "18087935",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "29830972",
                                  "name": "Chicken Sukka",
                                  "category": "Starters",
                                  "description": "Boneless chicken chunks hosted in dry masalas bringing it to a fine taste.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/e9d61bd0-effd-4fc9-aeb3-d377f89b9996_45814b75-3069-430e-bbbf-480e8f6b56b9.jpg",
                                  "inStock": 1,
                                  "price": 31800,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "394 ratings",
                                      "ratingCountV2": "394"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "18087950",
                                  "menuFilterIds": [
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ],
                          "subtitleSuffix": {

                          },
                          "categoryId": "59965590"
                        },
                        {
                          "title": "Tandoori Starters",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127264974",
                                  "name": "Chicken Malai Kabab",
                                  "category": "Starters",
                                  "description": "Creamy Kebab Of Boneless Chicken, Marinated With Cream Cheese, Cashew Paste, Green Chili, Coriander Stem, Cooked In A Tandoor.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/95c0aaf4-07d6-4f5c-9c5a-c048f48158a0_a53c5b1f-5557-42b5-b291-42def249bfec.jpg",
                                  "inStock": 1,
                                  "price": 35200,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCount": "13 ratings",
                                      "ratingCountV2": "13"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "49220526",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127264975",
                                  "name": "Tandoori Chicken ( Half)",
                                  "category": "Starters",
                                  "description": "Spiced chicken full marinated with spices and grilled in tandoor (Half)",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/29d2436a-9d4a-4d35-8f7b-0bcb4767a892_4af78aa9-acb4-45f0-bb80-61655d626294.jpg",
                                  "inStock": 1,
                                  "price": 36200,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "61 ratings",
                                      "ratingCountV2": "61"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "45091686",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127626941",
                                  "name": "Chicken Hariyali Kebab",
                                  "category": "Starters",
                                  "description": "Juicy & tender chicken infused with the flavors of coriander & mint, char-grilled to perfection served with Green Chutney and Onion Salad",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/08727673-9228-4924-b081-1950c9c14a48_e8b47a94-e347-4c52-8205-8fa2f5f965e5.jpg",
                                  "inStock": 1,
                                  "price": 35200,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.7",
                                      "ratingCount": "15 ratings",
                                      "ratingCountV2": "15"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "18087897",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127652759",
                                  "name": "Afghani Tandoori (full)",
                                  "category": "Starters",
                                  "description": "Chicken marinated in a lime mixture made from ginger, garlic, spices, herbs, and cashewnut paste, roasted till it's scrumptious (Full)",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/2b7959bb-aaad-48a8-81cc-c2a14eec81be_5400e024-87b3-403c-a2c0-89a3ad7b21b3.jpg",
                                  "inStock": 1,
                                  "price": 60500,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "5.0",
                                      "ratingCount": "3 ratings",
                                      "ratingCountV2": "3"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "73993290",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127652760",
                                  "name": "Afghani Tandoori (half)",
                                  "category": "Starters",
                                  "description": "Chicken marinated in a lime mixture made from ginger, garlic, spices, herbs, and cashewnut paste, roasted till it's scrumptious (Half)",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/5da10bb9-8634-44c6-be46-77c84a3aca9d_c96feb60-cfb5-468e-a660-17d02fcace1b.jpg",
                                  "inStock": 1,
                                  "price": 36200,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCount": "9 ratings",
                                      "ratingCountV2": "9"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "73993291",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "128201176",
                                  "name": "Tangidi Kabab 3pcs",
                                  "category": "Starters",
                                  "description": "Chicken drumsticks marinated in blend of aromatic spices, yogurt & lemon juice",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/84e39b3c-dfd8-4978-9789-48d077fd1d5d_47039d0b-bf01-4a82-8ccd-dd2ad8900379.jpg",
                                  "inStock": 1,
                                  "price": 33000,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "21 ratings",
                                      "ratingCountV2": "21"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "63470600",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "128212294",
                                  "name": "Chicken Tikka",
                                  "category": "Starters",
                                  "description": "Soft, juicy chicken tikka that melts in your mouth. Tender pieces of boneless chicken in our secret and spicy home marinade",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/95b35e79-ecda-4ba8-9dd7-bc2c843c55ab_91c684cf-2c49-41ed-b2d0-de11f0d1a00c.jpg",
                                  "inStock": 1,
                                  "price": 35200,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.8",
                                      "ratingCount": "12 ratings",
                                      "ratingCountV2": "12"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "imageBadges": [
                                    {
                                      "imageId": "merch_bau/High%20Protein%201_1.png"
                                    },
                                    {
                                      "imageId": "Low%20cal/Low%20cal%201_1.png"
                                    }
                                  ],
                                  "parentId": "18087956",
                                  "menuFilterIds": [
                                    "EATRIGHT",
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "165860740",
                                  "name": "Tandoori Chicken ( Full )",
                                  "category": "Starters",
                                  "description": "Spiced chicken full marinated with spices and grilled in tandoor (Full)",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/a2672161-dfdf-4aba-b0eb-1cda58f75600_ef707e36-23e4-45b4-9ffa-06b6bacc4194.jpg",
                                  "inStock": 1,
                                  "price": 60500,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "14 ratings",
                                      "ratingCountV2": "14"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "45091685",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ],
                          "subtitleSuffix": {

                          },
                          "categoryId": "59965591"
                        },
                        {
                          "title": "BBQ Starters",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127652768",
                                  "name": "Alfaham Chicken Half",
                                  "category": "Starters",
                                  "description": "Chicken marinated with Arabian spice and barbequed in a charcoal grill (Half)",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/0dd73216-69b1-430b-ad34-e284222be8ab_77439422-c64d-411c-87b6-f40372e163a9.jpg",
                                  "inStock": 1,
                                  "price": 38400,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.0",
                                      "ratingCount": "14 ratings",
                                      "ratingCountV2": "14"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "56569744",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127652769",
                                  "name": "Alfaham Chicken Full",
                                  "category": "Starters",
                                  "description": "Chicken marinated with Arabian spice and barbequed in a charcoal grill (Full)",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/12f119d1-9d5b-4649-97cf-1fc0d920d593_0da7acbc-ae96-4923-9b07-3c7183765e58.jpg",
                                  "inStock": 1,
                                  "price": 66000,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "5.0",
                                      "ratingCount": "1 rating",
                                      "ratingCountV2": "1"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "60253878",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127652770",
                                  "name": "BBQ Chicken Full",
                                  "category": "Starters",
                                  "description": "Bbq chicken is a classic dish featuring chicken pieces that are seasoned, grilled, or smoked, and then slathered with barbecue sauce (Full)",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/1112cb66-efab-404b-9857-cb376b59776a_0676438a-be41-41ac-b8b8-6baf94a928b4.jpg",
                                  "inStock": 1,
                                  "price": 66000,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.3",
                                      "ratingCount": "3 ratings",
                                      "ratingCountV2": "3"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#D9EFEC",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_medium",
                                      "ratingTextColor": "rating_medium",
                                      "ratingCountTextColor": "rating_medium",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "74290262",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127652771",
                                  "name": "BBQ Chicken Half",
                                  "category": "Starters",
                                  "description": "Bbq chicken is a classic dish featuring chicken pieces that are seasoned, grilled, or smoked, and then slathered with barbecue sauce (Half)",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/773eed4a-bbf1-41be-94cb-9373c4b19d24_7d22b2bb-89dd-445f-b9a7-88f7899dbcba.jpg",
                                  "inStock": 1,
                                  "price": 38400,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.9",
                                      "ratingCount": "4 ratings",
                                      "ratingCountV2": "4"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "74290263",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127652772",
                                  "name": "Pepper BBQ Chicken Full",
                                  "category": "Starters",
                                  "description": "Pepper barbeque chicken marinated chicken pieces with curd, ginger-garlic paste, soy sauce, vinegar, lemon juice and salt to taste (Full)",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/5ba94784-7205-49ea-a10d-782d5cb2a08b_43428391-c410-4048-b485-2b54dbb4f525.jpg",
                                  "inStock": 1,
                                  "price": 66000,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "5.0",
                                      "ratingCount": "2 ratings",
                                      "ratingCountV2": "2"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "60253879",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127652773",
                                  "name": "Pepper BBQ Chicken Half",
                                  "category": "Starters",
                                  "description": "Pepper barbeque chicken marinated chicken pieces with curd, ginger-garlic paste, soy sauce, vinegar, lemon juice and salt to taste (Half)",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/bbad7f82-0b55-4499-b258-f1cdd165a43a_dfc7e875-5c40-4b67-aca3-3d72b929ed1e.jpg",
                                  "inStock": 1,
                                  "price": 38400,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "6 ratings",
                                      "ratingCountV2": "6"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "46942212",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ],
                          "subtitleSuffix": {

                          },
                          "categoryId": "59965592"
                        },
                        {
                          "title": "Deep Fry",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127652767",
                                  "name": "Chicken Leg Fry 2pcs",
                                  "category": "Starters",
                                  "description": "Chicken Legs Coated with fresh spices and mildly frioed",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/b0268a2b-c1b4-4d01-a910-ef40ea32b5d0_d6d6484a-e1b2-44fa-90ed-b787f6a0d9b0.jpg",
                                  "inStock": 1,
                                  "price": 25200,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "188 ratings",
                                      "ratingCountV2": "188"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "74290266",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "129045628",
                                  "name": "Chicken Kabab ( With Bone )",
                                  "category": "Starters",
                                  "description": "Chicken bone pieces marinated and fried with batter that is filled with a beautiful texture of Indian spices.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/48d0ed39-3c65-4eb9-b159-371a0057de74_0e4da3be-a68c-49e8-8a5d-8052f9ccba8f.jpg",
                                  "inStock": 1,
                                  "price": 26400,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "376 ratings",
                                      "ratingCountV2": "376"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "52974827",
                                  "menuFilterIds": [
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "51310441",
                                  "name": "Chicken 65 (boneless)",
                                  "category": "Starters",
                                  "description": "A medium spicy, deep-fried chicken piece perfectly cooked with different spices.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/f8e99d6e-ccd8-4fb1-abaa-eb8adf2ec315_ff8f6119-8139-4a05-9c1d-fb64b2beb709.jpg",
                                  "inStock": 1,
                                  "price": 27400,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "1775 ratings",
                                      "ratingCountV2": "1.8K+"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "18087862",
                                  "menuFilterIds": [
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "51310443",
                                  "name": "Chicken Lolly Pop",
                                  "category": "Starters",
                                  "description": "| 4 Pcs | A hot and spicy appetizer made with drummettes of chicken with added special masalas.",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/cf84ba50-759f-43fa-b0a1-15a642ed147c_02d14a0e-cd6a-4b40-aee2-f29fc683f4bc.jpg",
                                  "inStock": 1,
                                  "price": 31800,
                                  "variants": {

                                  },
                                  "variantsV2": {

                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {

                                  },
                                  "type": "ITEM",
                                  "itemBadge": {

                                  },
                                  "badgesV2": {

                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "931 ratings",
                                      "ratingCountV2": "931"
                                    },
                                    "ratingsPresentationConfig": {
                                      "bgGradient": {
                                        "colours": [
                                          "#C8F9E5",
                                          "#00FFFFFF"
                                        ],
                                        "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                      },
                                      "ratingIconColor": "rating_very_good",
                                      "ratingTextColor": "rating_very_good",
                                      "ratingCountTextColor": "rating_very_good",
                                      "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                    }
                                  },
                                  "itemPriceStrikeOff": true,
                                  "parentId": "18087918",
                                  "menuFilterIds": [
                                    "NONVEG",
                                    "offer",
                                    "toprated"
                                  ]
                                },
                                "analytics": {

                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ],
                          "subtitleSuffix": {

                          },
                          "categoryId": "59965594"
                        }
                      ],
                      "image": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/be456eb6-9dcc-4190-bb97-14b2c3b3b8c1_cc61217a-76fe-4fb6-a681-fe5d9a4ffaa5.jpg",
                      "categoryId": "59965579"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Special Parotta",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "165064831",
                              "name": "Paratha [ 2 Pieces]",
                              "category": "Special Parotta",
                              "description": "Flat unleavened bread, made of Maida flour on tawa",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/02e73ffd-edeb-4744-9912-eb8d93fb8ec8_e90fc69f-0300-4d9d-8961-e32f8fe0c269.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 6900,
                              "finalPrice": 4000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "offerTags": [
                                {
                                  "matchText": "SILD"
                                }
                              ],
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "itemNudgeType": "FinalPrice",
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "156 ratings",
                                  "ratingCountV2": "156"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "cartContext": "quick_prep",
                              "offerIds": [
                                "db0fe48b-918a-4e07-8023-2de526e36031"
                              ],
                              "isNinetyninestoreItem": true,
                              "parentId": "74505667",
                              "menuFilterIds": [
                                "bestseller",
                                "VEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "29830935",
                              "name": "Egg Kothu Paratha",
                              "category": "Special Parotta",
                              "description": "Parotta chopped with scrambled eggs and select spices",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/62df1864-842b-40de-ae6c-a8cd5fe2830f_e90dbc00-116b-4974-bb6a-72d8272a5913.jpg",
                              "inStock": 1,
                              "price": 18800,
                              "finalPrice": 14900,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "offerTags": [
                                {
                                  "matchText": "SILD"
                                }
                              ],
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "itemNudgeType": "FinalPrice",
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "175 ratings",
                                  "ratingCountV2": "175"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "cartContext": "quick_prep",
                              "offerIds": [
                                "1b3ff0c8-d924-482f-85d7-00e5fc4f3732"
                              ],
                              "isNinetyninestoreItem": true,
                              "parentId": "18088033",
                              "menuFilterIds": [
                                "NONVEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "29830937",
                              "name": "Chicken Kothu Paratha",
                              "category": "Special Parotta",
                              "description": "Tender pieces of chicken mixed with flaky minced parotta and aromatic spices, and treat yourself to a truly delightful local culinary experience.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/2039599e-b146-4f98-a27b-c39ea2069072_43c60443-0718-4e1c-86b1-3aea487f5b25.jpg",
                              "inStock": 1,
                              "price": 23500,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "NONVEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "260 ratings",
                                  "ratingCountV2": "260"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "18087908",
                              "menuFilterIds": [
                                "NONVEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "subtitleSuffix": {

                      },
                      "image": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/02e73ffd-edeb-4744-9912-eb8d93fb8ec8_e90fc69f-0300-4d9d-8961-e32f8fe0c269.jpg",
                      "categoryId": "59965581"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Indian Breads",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "127696266",
                              "name": "Butter Kulcha",
                              "category": "Indian Breads",
                              "description": "A delectable Indian delight with a rich and buttery flavor that will melt in your mouth.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/3fe21356-eb84-42ae-ab8e-2d67eccffcfc_0c0d5bf2-60db-4b05-b816-301eb4da13fa.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 6500,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.6",
                                  "ratingCount": "6 ratings",
                                  "ratingCountV2": "6"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#D9EFEC",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_medium",
                                  "ratingTextColor": "rating_medium",
                                  "ratingCountTextColor": "rating_medium",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "18087845",
                              "menuFilterIds": [
                                "VEG",
                                "offer"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "127696267",
                              "name": "Butter Naan",
                              "category": "Indian Breads",
                              "description": "Leavened flatbread prepared with all-purpose flour, cooked on tandoor & topped with delicious butter",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/ecba462b-670a-4fb9-a46e-db6f6b49dd9e_40f5eebc-2e77-4c67-93d0-1501a67a13fa.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 6000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "21 ratings",
                                  "ratingCountV2": "21"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "18087846",
                              "menuFilterIds": [
                                "VEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "127696268",
                              "name": "Butter Roti",
                              "category": "Indian Breads",
                              "description": "Light and soft phulka smothered in the richness of butter.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/5934efd7-251b-4a63-9df0-45ad91ac1a22_b03e041d-1c3f-40a3-b0c1-36b296a0fe6a.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 5800,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "2.7",
                                  "ratingCount": "6 ratings",
                                  "ratingCountV2": "6"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#FFF0CD",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_low",
                                  "ratingTextColor": "rating_low",
                                  "ratingCountTextColor": "rating_low",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "18087847",
                              "menuFilterIds": [
                                "VEG",
                                "offer"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "127696269",
                              "name": "Garlic Naan",
                              "category": "Indian Breads",
                              "description": "North Indian bread with a rich undertone of garlic that tastes brilliant when paired with a gravy.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/2b9c0e12-4b0a-4a5b-b49f-d660bb2984dd_0912e75a-2cc1-4a1b-8541-27af8368f9d5.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 6500,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.8",
                                  "ratingCount": "11 ratings",
                                  "ratingCountV2": "11"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#D9EFEC",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_medium",
                                  "ratingTextColor": "rating_medium",
                                  "ratingCountTextColor": "rating_medium",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "49348608",
                              "menuFilterIds": [
                                "VEG",
                                "offer"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "127696270",
                              "name": "Kulcha",
                              "category": "Indian Breads",
                              "description": "Indian bread made from flour and a bit of salt. Leavened and cooked till it's soft and fluffy.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/6842bedd-c63b-4a8d-ac8f-c01bec54e327_ad86336e-a0a0-4b2b-88cd-a55bf94be042.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 5800,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "1 rating",
                                  "ratingCountV2": "1"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "18088141",
                              "menuFilterIds": [
                                "VEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "127696271",
                              "name": "Naan",
                              "category": "Indian Breads",
                              "description": "A classic Indian flatbread baked in a tandoor oven, boasting a soft texture, charred exterior, and a hint of smoky flavor.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/d5c51dc5-50ba-4a90-8c8a-eaf9c65b2e60_bb561c73-3225-44f1-8b56-4bb7a9e595b2.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 5300,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.9",
                                  "ratingCount": "5 ratings",
                                  "ratingCountV2": "5"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#D9EFEC",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_medium",
                                  "ratingTextColor": "rating_medium",
                                  "ratingCountTextColor": "rating_medium",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "18088264",
                              "menuFilterIds": [
                                "VEG",
                                "offer"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "127696272",
                              "name": "Roti",
                              "category": "Indian Breads",
                              "description": "Freshly made, soft and flaky bread that perfectly complements any Indian meal",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/f6d270ba-164a-49e6-9a0a-2293cee35030_4012c4d7-6667-49c7-9209-a29a9b5d7a1e.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 5300,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "26 ratings",
                                  "ratingCountV2": "26"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "18088398",
                              "menuFilterIds": [
                                "VEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "127696273",
                              "name": "Tandoori Paratha",
                              "category": "Indian Breads",
                              "description": "Indian flatbread made of a mix of wheat flour made in a tandoor",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/b53566dd-a914-4b0c-89bc-2fcbacc989e3_70d1eddc-c8b5-44c9-a84d-5fd3f07a964b.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 6000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.3",
                                  "ratingCount": "11 ratings",
                                  "ratingCountV2": "11"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#D9EFEC",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_medium",
                                  "ratingTextColor": "rating_medium",
                                  "ratingCountTextColor": "rating_medium",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "18088440",
                              "menuFilterIds": [
                                "VEG",
                                "offer"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "subtitleSuffix": {

                      },
                      "image": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/3fe21356-eb84-42ae-ab8e-2d67eccffcfc_0c0d5bf2-60db-4b05-b816-301eb4da13fa.jpg",
                      "categoryId": "59965580"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Dessert",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "127696308",
                              "name": "Gulab Jamun 2 Pcs",
                              "category": "Dessert",
                              "description": "Gulab Jamun is a traditional Indian sweet that is made with a milk-solid dough that is deep-fried and then soaked in sugar syrup. These sweet balls have a soft and spongy texture and a sweet, syrupy taste.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/659b39b3-4525-4ba2-99d8-7f8de7fe02c9_48f2c442-8c91-420f-828a-09e6411d0e14.JPG",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 12900,
                              "finalPrice": 6900,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "offerTags": [
                                {
                                  "matchText": "SILD"
                                }
                              ],
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "itemNudgeType": "FinalPrice",
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "62 ratings",
                                  "ratingCountV2": "62"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "cartContext": "quick_prep",
                              "offerIds": [
                                "20d20936-076a-4c67-9e53-2bd234e1f586"
                              ],
                              "isNinetyninestoreItem": true,
                              "parentId": "52974831",
                              "menuFilterIds": [
                                "bestseller",
                                "VEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "subtitleSuffix": {

                      },
                      "image": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/659b39b3-4525-4ba2-99d8-7f8de7fe02c9_48f2c442-8c91-420f-828a-09e6411d0e14.JPG",
                      "categoryId": "59965585"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Sides / Extra",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "127696309",
                              "name": "Brinjal Curry (100ml)",
                              "category": "Sides / Extra",
                              "description": "Fried brinjal cooked in a smooth, creamy and a delicious butter gravy (100ml).",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1700,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "77 ratings",
                                  "ratingCountV2": "77"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "74290264",
                              "menuFilterIds": [
                                "VEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "127696310",
                              "name": "Brinjal Curry (250ml)",
                              "category": "Sides / Extra",
                              "description": "Fried brinjal cooked in a smooth, creamy and a delicious butter gravy (250ml).",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 3900,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "64 ratings",
                                  "ratingCountV2": "64"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "74290265",
                              "menuFilterIds": [
                                "VEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "127696311",
                              "name": "Mayonnaise (100ml)",
                              "category": "Sides / Extra",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 4400,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "16 ratings",
                                  "ratingCountV2": "16"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "52974835",
                              "menuFilterIds": [
                                "VEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "127696312",
                              "name": "Onion Raita (100ml)",
                              "category": "Sides / Extra",
                              "description": "A classic indian side dish made with creamy yogurt mixed with finely chopped onions, seasoned with aromatic spices like cumin, coriander, and mint, offering a refreshing and tangy complement to spicy curries and rice (100ml).",
                              "imageId": "c34185074fa0f7ca484090df43d47938",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 1700,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "238 ratings",
                                  "ratingCountV2": "238"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "74290268",
                              "menuFilterIds": [
                                "VEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "127696313",
                              "name": "Onion Raita (250ml)",
                              "category": "Sides / Extra",
                              "description": "A classic indian side dish made with creamy yogurt mixed with finely chopped onions, seasoned with aromatic spices like cumin, coriander, and mint, offering a refreshing and tangy complement to spicy curries and rice (250ml).",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 3900,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.2",
                                  "ratingCount": "61 ratings",
                                  "ratingCountV2": "61"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#00FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "itemPriceStrikeOff": true,
                              "parentId": "74290269",
                              "menuFilterIds": [
                                "VEG",
                                "offer",
                                "toprated"
                              ]
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "subtitleSuffix": {

                      },
                      "image": "c34185074fa0f7ca484090df43d47938",
                      "categoryId": "59965586"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      "type": "FSSAI",
                      "imageId": "fssai_final_edss9i",
                      "text": [
                        "License No. 11221334002662"
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      "name": "Ambur Star Briyani Since 1890",
                      "area": "BTM Layout",
                      "completeAddress": "9, outer ring road,kuvembu nagar,btm 2stage,near udupi garden signal.bengaluru-560076"
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ],
    "firstOffsetRequest": true,
    "isQCLink": false
  },
  "tid": "8a0a7568-4823-424f-9958-a55b89d8711d",
  "sid": "qr06e4a8ab3-3874-406d-b951-010fafe42",
  "deviceId": "53aafe96-6a19-1a5c-b8f9-8377eb4ceaee",
  "csrfToken": "OSkhwVm2kHKo-XDzqN_1kCtBO_Yy82V_XkcPiQpk"
}