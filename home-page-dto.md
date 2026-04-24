# Home Page DTO

## Origen

La página [`src/app/[locale]/page.tsx`](/Users/brunomartinezgonzalez/Documents/OTHER/Hunters/hunters-new-landing/src/app/[locale]/page.tsx:1) consume este dato:

```ts
const response = await nextFetch({
  lang: locale,
  path: '/huntercreativos-landing',
})

return response.data.attributes
```

La URL final que resuelve [`src/provider/nextFetch.ts`](/Users/brunomartinezgonzalez/Documents/OTHER/Hunters/hunters-new-landing/src/provider/nextFetch.ts:1) es:

```txt
GET https://cms.wearedoble.com/api/huntercreativos-landing?populate=deep&locale={locale}
```

Snapshot verificado el `2026-04-23` con `locale=es`.

## DTO que recibe la home

```ts
type Locale = 'es' | 'en'

type StrapiImageFormat = {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
  sizeInBytes: number
  provider_metadata: {
    public_id: string
    resource_type: string
  }
}

type StrapiImageAttributes = {
  name: string
  alternativeText: string | null
  caption: string | null
  width: number | null
  height: number | null
  formats: Record<string, StrapiImageFormat> | null
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: {
    public_id: string
    resource_type: string
  }
  createdAt: string
  updatedAt: string
}

type StrapiMedia = {
  data: {
    id: number
    attributes: StrapiImageAttributes
  } | null
}

type StrapiMediaItem = {
  id: number
  attributes: StrapiImageAttributes
}

type StrapiMediaCollection = {
  data: StrapiMediaItem[]
}

type RichTextNode = {
  text: string
  type: 'text'
}

type RichTextBlock = {
  type: 'paragraph'
  children: RichTextNode[]
}

export type HomePageDto = {
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: Locale
  seo: {
    id: number
    metaTitle: string
    metaDescription: string
    keywords: string
    metaRobots: string
    structuredData: unknown | null
    metaViewport: string | null
    canonicalURL: string
    metaImage: StrapiMedia
  }
  hero: {
    id: number
    hero: string
  }
  aboutUs: {
    id: number
    textOne: string
  }
  IntroductionText: {
    id: number
    title: string
    description: RichTextBlock[]
    image: StrapiMedia
  }
  AboutProjects: {
    id: number
    textOne: string
  }
  Carousel: {
    id: number
    title: string | null
    images: StrapiMediaCollection
  }
  citiesList: {
    id: number
    title: string
    text: string
    city: {
      id: number
      cityName: string
    }[]
  }
  LogoGrid: {
    id: number
    title: string
    logos: StrapiMediaCollection
  }
  people: {
    id: number
    title: string
    image: StrapiMedia
    contactPerson: {
      id: number
      email: string
    }[]
  }
  servicesList: {
    id: number
    title: string
    serviceHunterList: {
      id: number
      serviceHunter: string
    }[]
  }
  whatWeDoSection: {
    id: number
    title: string
    whatWeDoItem: {
      id: number
      title: string
      description: string
    }[]
  }
  serviceListSectionNew: {
    id: number
    serviceCategoryNew: {
      id: number
      title: string
      serviceItem: {
        id: number
        serviceName: string
      }[]
    }[]
  }
  imageExperience: StrapiMedia
  localizations: {
    data: {
      id: number
      attributes: {
        createdAt: string
        updatedAt: string
        publishedAt: string
        locale: Locale
      }
    }[]
  }
}
```

## Snapshot real del payload

### Claves top-level

```json
[
  "AboutProjects",
  "Carousel",
  "IntroductionText",
  "LogoGrid",
  "aboutUs",
  "citiesList",
  "createdAt",
  "hero",
  "imageExperience",
  "locale",
  "localizations",
  "people",
  "publishedAt",
  "seo",
  "serviceListSectionNew",
  "servicesList",
  "updatedAt",
  "whatWeDoSection"
]
```

### Resumen útil para UI

```json
{
  "locale": "es",
  "hero": {
    "id": 1,
    "hero": "Producimos y diseñamos tus ideas"
  },
  "aboutUs": {
    "id": 1,
    "textOne": "Somos una empresa especializada en produccióny diseño de soluciones a medida, capaz de transformar ideas en realidades con un alto estándar de calidad."
  },
  "IntroductionText": {
    "id": 1,
    "title": "El valor de la unión",
    "description": [
      {
        "type": "paragraph",
        "children": [
          {
            "text": "Integramos diseño, creatividad, producción y ejecución en un enfoque 360° que abarca desde piezas únicas ad-hoc hasta grandes proyectos como stands, convenciones, eventos y planes de activación.",
            "type": "text"
          }
        ]
      }
    ],
    "image": {
      "data": {
        "id": 733,
        "attributes": {
          "name": "this-is-what-we-do.png",
          "width": 941,
          "height": 628,
          "url": "https://res.cloudinary.com/dyxcs4jyl/image/upload/v1776921977/this_is_what_we_do_cc50b1789e.png"
        }
      }
    }
  },
  "AboutProjects": {
    "id": 4,
    "textOne": "Proyectos que sorprenden, emocionan y dejan huella."
  },
  "servicesList": {
    "id": 1,
    "title": "¿Qué hacemos?",
    "serviceHunterList": [
      { "id": 2, "serviceHunter": "Activaciones" },
      { "id": 1, "serviceHunter": "On/Off Trade" },
      { "id": 4, "serviceHunter": "Visibilidad Marca" }
    ]
  },
  "citiesList": {
    "id": 1,
    "title": "¿Dónde?",
    "text": "TRABAJAMOS A NIVEL GLOBAL PARA TODOS LOS SECTORES",
    "city": [
      { "id": 37, "cityName": "EUROPA" },
      { "id": 38, "cityName": "LATAM" },
      { "id": 39, "cityName": "USA" }
    ]
  },
  "people": {
    "id": 1,
    "title": "CONTACTO",
    "contactPerson": [
      { "id": 19, "email": "oscar@huntertheagency.com" },
      { "id": 2, "email": "mario@huntertheagency.com" },
      { "id": 20, "email": "cuentas@huntertheagency.com" }
    ]
  },
  "whatWeDoSection": {
    "id": 1,
    "title": "Fabricamos de principio a fin, entregando siempre un producto terminado у listo para impactar",
    "whatWeDoItem": [
      {
        "id": 1,
        "title": "PRODUCCIÓN INTEGRAL:",
        "description": "Desarrollamos y fabricamos stands, exposiciones, mobiliario efímero, displays, señalética y piezas singulares totalmente personalizadas."
      }
    ]
  },
  "serviceListSectionNew": {
    "id": 1,
    "serviceCategoryNew": [
      {
        "id": 1,
        "title": "PRODUCCIÓN PROYECTOS",
        "serviceItem": [
          { "id": 1, "serviceName": "Stands y Eventos" },
          { "id": 8, "serviceName": "Mobiliario, Duty Free" }
        ]
      }
    ]
  },
  "imageExperience": {
    "data": {
      "id": 734,
      "attributes": {
        "name": "20-años-de-diseño-y-fabricacion.png",
        "width": 1138,
        "height": 431,
        "url": "https://res.cloudinary.com/dyxcs4jyl/image/upload/v1776922129/20_anos_de_diseno_y_fabricacion_61991e354b.png"
      }
    }
  },
  "localizations": {
    "data": [
      {
        "id": 2,
        "attributes": {
          "locale": "en"
        }
      }
    ]
  }
}
```

### Colecciones grandes

```json
{
  "Carousel.images.data.length": 42,
  "LogoGrid.logos.data.length": 47,
  "people.contactPerson.length": 3,
  "citiesList.city.length": 5,
  "servicesList.serviceHunterList.length": 9,
  "whatWeDoSection.whatWeDoItem.length": 4,
  "serviceListSectionNew.serviceCategoryNew.length": 3
}
```

### Ejemplo de item de `Carousel.images.data`

```json
{
  "id": 595,
  "attributes": {
    "name": "01-01.jpg",
    "alternativeText": null,
    "caption": null,
    "width": 6240,
    "height": 4160,
    "formats": {
      "large": {
        "url": "https://res.cloudinary.com/dyxcs4jyl/image/upload/v1760451055/large_03_cef3650e41.jpg",
        "width": 1000,
        "height": 667
      },
      "small": {
        "url": "https://res.cloudinary.com/dyxcs4jyl/image/upload/v1760451055/small_03_cef3650e41.jpg",
        "width": 500,
        "height": 333
      },
      "medium": {
        "url": "https://res.cloudinary.com/dyxcs4jyl/image/upload/v1760451055/medium_03_cef3650e41.jpg",
        "width": 750,
        "height": 500
      },
      "thumbnail": {
        "url": "https://res.cloudinary.com/dyxcs4jyl/image/upload/v1760451054/thumbnail_03_cef3650e41.jpg",
        "width": 234,
        "height": 156
      }
    },
    "url": "https://res.cloudinary.com/dyxcs4jyl/image/upload/v1760451059/03_cef3650e41.jpg"
  }
}
```

### Ejemplo de item de `LogoGrid.logos.data`

```json
{
  "id": 540,
  "attributes": {
    "name": "Abanca_logo.png",
    "alternativeText": null,
    "caption": null,
    "width": 2560,
    "height": 512,
    "formats": {
      "large": {
        "url": "https://res.cloudinary.com/dyxcs4jyl/image/upload/v1760363377/large_Abanca_logo_e84e7b19fd.png",
        "width": 1000,
        "height": 200
      },
      "small": {
        "url": "https://res.cloudinary.com/dyxcs4jyl/image/upload/v1760363377/small_Abanca_logo_e84e7b19fd.png",
        "width": 500,
        "height": 100
      },
      "medium": {
        "url": "https://res.cloudinary.com/dyxcs4jyl/image/upload/v1760363378/medium_Abanca_logo_e84e7b19fd.png",
        "width": 750,
        "height": 150
      },
      "thumbnail": {
        "url": "https://res.cloudinary.com/dyxcs4jyl/image/upload/v1760363377/thumbnail_Abanca_logo_e84e7b19fd.png",
        "width": 245,
        "height": 49
      }
    },
    "url": "https://res.cloudinary.com/dyxcs4jyl/image/upload/v1760363377/Abanca_logo_e84e7b19fd.png"
  }
}
```

## Nota

La home actual renderiza:

- `hero`
- `aboutUs`
- `IntroductionText`
- `AboutProjects`
- `servicesList`
- `Carousel`
- `citiesList`
- `LogoGrid`
- `people`

Pero el payload ya trae además:

- `whatWeDoSection`
- `serviceListSectionNew`
- `imageExperience`

Esos tres bloques ya están disponibles desde CMS y se pueden conectar a nuevos componentes sin tocar el endpoint.
