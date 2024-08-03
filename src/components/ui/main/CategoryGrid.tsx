import { CategoryItem } from "@/interfaces"
import { Title } from "./Title"
import { PROPERTY_CATEGORY } from "@/types";
import { CategoryGridItem } from "./CategoryGridItem";

const options: CategoryItem[] =  [
    {
      id: PROPERTY_CATEGORY.STORE,
      image: 'https://nyc3.digitaloceanspaces.com/firmacasas/domus/public/system/category/Baulera-medium_2v3JY2j.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DO00XYY9ELQY7B4G4NDW%2F20240803%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20240803T035011Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=4805a4e7a856d6f0d9ea02c732f61880c0012a49630907e08e0ff29c1f0337b9',
      icon: '/images/icons/Baulera.webp',
      title: 'Baulera',
      width: 1024,
      height: 680,
      widthIcon: 2400,
      heightIcon: 1105,
    },
    {
      id: PROPERTY_CATEGORY.HOUSE,
      image: 'https://nyc3.digitaloceanspaces.com/firmacasas/domus/public/system/category/Casa-medium.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DO00XYY9ELQY7B4G4NDW%2F20240803%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20240803T035011Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=5ef48e679a35a8ad9066b6f4652f38f88e2dcce727941746fad1e48be81e898b',
      icon: '/images/icons/Casa.webp',
      title: 'Casa',
      width: 750,
      height: 508,
      widthIcon: 100,
      heightIcon: 100,
    },
    {
      id: PROPERTY_CATEGORY.BUILDING,
      image: 'https://nyc3.digitaloceanspaces.com/firmacasas/domus/public/system/category/Edificio-medium.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DO00XYY9ELQY7B4G4NDW%2F20240803%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20240803T035011Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=33772d0b74aac8b43bbc33eabfc233e118f24bb749cca7f076f9a9b2293464aa',
      icon: '/images/icons/Edificio.webp',
      title: 'Edificio',
      width: 750,
      height: 500,
      widthIcon: 100,
      heightIcon: 100,
    },
    {
      id: PROPERTY_CATEGORY.DEPARTMENT,
      image: 'https://nyc3.digitaloceanspaces.com/firmacasas/domus/public/system/category/Departamento-medium.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DO00XYY9ELQY7B4G4NDW%2F20240803%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20240803T035011Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=799b57920a4ebf0cedf3d2130a032a17b47066ec0cb9950793fe6466533612cc',
      icon: '/images/icons/Departamento.webp',
      title: 'Departamento',
      width: 750,
      height: 500,
      widthIcon: 100,
      heightIcon: 100,
    },
    {
      id: PROPERTY_CATEGORY.SHED,
      image: 'https://nyc3.digitaloceanspaces.com/firmacasas/domus/public/system/category/Galpon-medium.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DO00XYY9ELQY7B4G4NDW%2F20240803%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20240803T035011Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=f04e98b06f4f42850142f31a3f69615a91f6e816146d4e14e3f72d0c3b982c70',
      icon: '/images/icons/Galpon.webp',
      title: 'Galpon',
      width: 750,
      height: 500,
      widthIcon: 100,
      heightIcon: 100,
    },
    {
      id: PROPERTY_CATEGORY.SHOP,
      image: 'https://nyc3.digitaloceanspaces.com/firmacasas/domus/public/system/category/Local-comercial-medium_6u4mrWk.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DO00XYY9ELQY7B4G4NDW%2F20240803%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20240803T035011Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=c3c19f84172157f1a533c6a32c3b071a3733fc5988595dd0d50488ccdcdf22ec',
      icon: '/images/icons/LocalComercial.webp',
      title: 'Local comercial',
      width: 3000,
      height: 2000,
      widthIcon: 2400,
      heightIcon: 1105,
    },
    {
      id: PROPERTY_CATEGORY.OFFICE,
      image: 'https://nyc3.digitaloceanspaces.com/firmacasas/domus/public/system/category/Oficina-medium.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DO00XYY9ELQY7B4G4NDW%2F20240803%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20240803T035011Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a93593443cd681d8f21e3aca9b0a8fd52f6a6f20e6657c1e820e8eea7d4dc2df',
      icon: '/images/icons/Oficina.webp',
      title: 'Oficina',
      width: 750,
      height: 500,
      widthIcon: 100,
      heightIcon: 100,
    },
    {
      id: PROPERTY_CATEGORY.PARKING,
      image: 'https://nyc3.digitaloceanspaces.com/firmacasas/domus/public/system/category/Parqueo-medium.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DO00XYY9ELQY7B4G4NDW%2F20240803%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20240803T035011Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=6f643325e1cde932630ddcfbaaa362006eef15578cfffa4858797df0558020f1',
      icon: '/images/icons/Parqueo.webp',
      title: 'Parqueo',
      width: 750,
      height: 1000,
      widthIcon: 100,
      heightIcon: 100,
    },
    {
      id: PROPERTY_CATEGORY.LAND,
      image: 'https://nyc3.digitaloceanspaces.com/firmacasas/domus/public/system/category/terreno-medium.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DO00XYY9ELQY7B4G4NDW%2F20240803%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20240803T035011Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=9abf37dd07e3fd0079240213da27bc2c7955748aeaf1b58bb4eae477d7cc5959',
      icon: '/images/icons/Terreno.webp',
      title: 'Terreno',
      width: 750,
      height: 562,
      widthIcon: 100,
      heightIcon: 100,
    },
  ];

export const CategoryGrid = () => {
  return (
    <div className="w-[80%] m-auto pb-28">
        <Title title="Búsqueda por categoria" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                options.map(value => (
                    <CategoryGridItem key={value.id} {...value}/>
                ))
            }
        </div>
    </div>
  )
}
