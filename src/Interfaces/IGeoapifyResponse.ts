export interface IGeoapifyResponse {
    city: City
    continent: Continent
    country: Country
    location: Location
    subdivisions: Subdivision[]
    state: State
    datasource: Datasource[]
    ip: string
  }
  
  export interface City {
    name: string
    names: Names
  }
  
  export interface Names {
    en: string
  }
  
  export interface Continent {
    code: string
    geoname_id: number
    names: Names2
    name: string
  }
  
  export interface Names2 {
    de: string
    en: string
    es: string
    fa: string
    fr: string
    ja: string
    ko: string
    "pt-BR": string
    ru: string
    "zh-CN": string
  }
  
  export interface Country {
    geoname_id: number
    iso_code: string
    names: Names3
    name: string
    name_native: string
    phone_code: string
    capital: string
    currency: string
    flag: string
    languages: Language[]
  }
  
  export interface Names3 {
    de: string
    en: string
    es: string
    fa: string
    fr: string
    ja: string
    ko: string
    "pt-BR": string
    ru: string
    "zh-CN": string
  }
  
  export interface Language {
    iso_code: string
    name: string
    name_native: string
    rtl: number
  }
  
  export interface Location {
    latitude: number
    longitude: number
  }
  
  export interface Subdivision {
    names: Names4
  }
  
  export interface Names4 {
    en: string
  }
  
  export interface State {
    name: string
  }
  
  export interface Datasource {
    name: string
    attribution: string
    license: string
  }
  