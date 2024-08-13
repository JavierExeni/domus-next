import { CategoryItem } from "@/interfaces"
import { Title } from "./Title"
import { PROPERTY_CATEGORY } from "@/types";
import { CategoryGridItem } from "./CategoryGridItem";
import { SystemService } from "@/services/system/system-service";

export const CategoryGrid = async () => {
  const systemData = await SystemService.getSystemData();

  const options: CategoryItem[] =  [
    {
      id: PROPERTY_CATEGORY.STORE,
      image: systemData.store_category_banner,
      icon: '/images/icons/Baulera.webp',
      title: 'Baulera',
      width: 1024,
      height: 680,
      widthIcon: 2400,
      heightIcon: 1105,
    },
    {
      id: PROPERTY_CATEGORY.HOUSE,
      image: systemData.house_category_banner,
      icon: '/images/icons/Casa.webp',
      title: 'Casa',
      width: 750,
      height: 508,
      widthIcon: 100,
      heightIcon: 100,
    },
    {
      id: PROPERTY_CATEGORY.BUILDING,
      image: systemData.building_category_banner,
      icon: '/images/icons/Edificio.webp',
      title: 'Edificio',
      width: 750,
      height: 500,
      widthIcon: 100,
      heightIcon: 100,
    },
    {
      id: PROPERTY_CATEGORY.DEPARTMENT,
      image: systemData.department_category_banner,
      icon: '/images/icons/Departamento.webp',
      title: 'Departamento',
      width: 750,
      height: 500,
      widthIcon: 100,
      heightIcon: 100,
    },
    {
      id: PROPERTY_CATEGORY.SHED,
      image: systemData.shed_category_banner,
      icon: '/images/icons/Galpon.webp',
      title: 'Galpon',
      width: 750,
      height: 500,
      widthIcon: 100,
      heightIcon: 100,
    },
    {
      id: PROPERTY_CATEGORY.SHOP,
      image: systemData.shop_category_banner,
      icon: '/images/icons/LocalComercial.webp',
      title: 'Local comercial',
      width: 3000,
      height: 2000,
      widthIcon: 2400,
      heightIcon: 1105,
    },
    {
      id: PROPERTY_CATEGORY.OFFICE,
      image: systemData.office_category_banner,
      icon: '/images/icons/Oficina.webp',
      title: 'Oficina',
      width: 750,
      height: 500,
      widthIcon: 100,
      heightIcon: 100,
    },
    {
      id: PROPERTY_CATEGORY.PARKING,
      image: systemData.parking_category_banner,
      icon: '/images/icons/Parqueo.webp',
      title: 'Parqueo',
      width: 750,
      height: 1000,
      widthIcon: 100,
      heightIcon: 100,
    },
    {
      id: PROPERTY_CATEGORY.LAND,
      image: systemData.land_category_banner,
      icon: '/images/icons/Terreno.webp',
      title: 'Terreno',
      width: 750,
      height: 562,
      widthIcon: 100,
      heightIcon: 100,
    },
  ];

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
