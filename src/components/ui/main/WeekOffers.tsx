import { EmptyListMessage } from "../empty-list-message/EmptyListMessage"
import { Title } from "./Title"

export const WeekOffers = () => {
  return (
    <div className="w-[80%] mx-auto pb-16">
        <Title title="Propiedades en Oferta" />
        <EmptyListMessage message="No se encontraron registros de ofertas de la semana." />
    </div>
  )
}
