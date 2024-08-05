import {
  AgentContactForm,
  AgentProfileCard,
  AgentPropertyList,
} from "@/components";
import { getPropertyFilterList, getSingleAgent } from "@/services";
import { PaginatedResponse, Property } from "@/types";

interface Props {
  params: {
    id: number;
  };
}

export default async function AgentPage({ params }: Props) {
  const agent = await getSingleAgent(params.id);
  const properties: PaginatedResponse<Property> = await getPropertyFilterList(
    params.id
  );

  return (
    <div className="w-[90%] xl:w-[85%] m-auto py-4 flex gap-4">
      <div className="self-start flex-col gap-3 hidden xl:flex">
        {/* Profile Card */}
        <AgentProfileCard agent={agent} />

        {/* Contact Form */}
        <AgentContactForm agent={agent} />
      </div>

      <AgentPropertyList properties={properties} />
    </div>
  );
}
