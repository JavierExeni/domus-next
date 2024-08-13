import {
  AgentContactForm,
  AgentProfileCard,
  AgentPropertyList,
  PropertyList,
} from "@/components";
import ReduxProvider from "@/providers/redux-provider";
import { PropertyService } from "@/services/property/property-service";
import { AgentService } from "@/services/users/agent-service";
import { PaginatedResponse, Property } from "@/types";

interface Props {
  params: {
    id: number;
  };
}

export default async function AgentPage({ params }: Props) {
  // const properties: PaginatedResponse<Property> = await PropertyService.getPropertyFilterList(
  //   params.id
  // );
  // const agent = await AgentService.getSingleAgent(params.id);
  
  return (
    <PropertyList />
    // <div className="w-[90%] xl:w-[85%] m-auto py-4 flex gap-4">
    //   <div className="self-start flex-col gap-3 hidden xl:flex">
    //     {/* Profile Card */}
    //     <AgentProfileCard agent={agent} />

    //     {/* Contact Form */}
    //     <AgentContactForm agent={agent} />
    //   </div>
    //   <ReduxProvider>
    //     <AgentPropertyList properties={properties} />
    //   </ReduxProvider>
    // </div>
  );
}
