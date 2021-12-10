let SITE_ENVIRONMENT = "DEVELOPMENT";

// FOR LOCAL
let LOCAL_URL = "https://a3e26094e860.ngrok.io/api";
let LOCAL_BASE_URL = "";
let LOCAL_MOBILE_BG_IMAGE = "http://zerozone.com/nmr/mobile_app_builder/front_end/images/phone_r.svg";
let LOCAL_LOGO_IMAGE = "http://zerozone.com/nmr/mobile_app_builder/front_end/images/logo.svg";
let LOCAL_SHOPIFY_LOGO = "http://zerozone.com/nmr/mobile_app_builder/front_end/images/shopify_logo.png"
let LOCAL_STORE_LOGO = "http://zerozone.com/nmr/mobile_app_builder/front_end/images/store_01.png"

// FOR LIVE
let LIVE_URL = "http://zerozone.com/nmr/mobile_app_builder/api/api";
let LIVE_BASE_URL = "/nmr/mobile_app_builder/front_end/build";
let LIVE_MOBILE_BG_IMAGE = "http://zerozone.com/nmr/mobile_app_builder/front_end/images/phone_r.svg";
let LIVE_LOGO_IMAGE = "http://zerozone.com/nmr/mobile_app_builder/front_end/images/logo.svg";
let LIVE_SHOPIFY_LOGO = "http://zerozone.com/nmr/mobile_app_builder/front_end/images/shopify_logo.png"
let LIVE_STORE_LOGO = "http://zerozone.com/nmr/mobile_app_builder/front_end/images/store_01.png"

export const URL = SITE_ENVIRONMENT === "DEVELOPMENT" ? LOCAL_URL : LIVE_URL;
export const BASE_URL = SITE_ENVIRONMENT === "DEVELOPMENT" ? LOCAL_BASE_URL : LIVE_BASE_URL;
export const MOBILE_BG_IMAGE = SITE_ENVIRONMENT === "DEVELOPMENT" ? LOCAL_MOBILE_BG_IMAGE : LIVE_MOBILE_BG_IMAGE;
export const LOGO_IMAGE = SITE_ENVIRONMENT === "DEVELOPMENT" ? LOCAL_LOGO_IMAGE : LIVE_LOGO_IMAGE;
export const SHOPIFY_LOGO = SITE_ENVIRONMENT === "DEVELOPMENT" ? LOCAL_SHOPIFY_LOGO : LIVE_SHOPIFY_LOGO;
export const STORE_LOGO = SITE_ENVIRONMENT === "DEVELOPMENT" ? LOCAL_STORE_LOGO : LIVE_STORE_LOGO;

export const SITE_NAME = "Mobile App Builder";
export const SITE_COPYRIGHT = "Budgie Apps";

export const IMAGE_URL = "";

export const IBFOLDER = ''
export const COL_SLI_FOLDER = ''
export const ROT_SLI_FOLDER = ''
export const BRANDFOLDER = ''
export const APPLEFOLDER = ''
export const SPLASHFOLDER = ''
export const GOOGLEFOLDER = ''

export const PLACEHOLDER_IMAGE = "http://zerozone.com/nmr/ShopifyMobileApp/Images/placeholder.png"
export const ICONCOLOR = "#039be5" // All icon color in builder
export const INACTIVECOLOR = "lightgrey"
export const BUTTONCOLOR = "#039be5" // All button color in builde
export const MENUCOLOR = "#039be5" // Navidation menu color in builder
export const LABELCOLOR = "black" //Application preview lable color
export const SUCCESSMESSAGE = "Data Updated Successfully"
export const WARNINGMESSAGE = "All Fields are Mandetory"

export const REGULARFONT = "Poppins-Regular"
export const BOLDFONT = "Poppins-SemiBold"

