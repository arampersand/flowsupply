import { LifetimeDeal } from '@gitroom/frontend/components/billing/lifetime.deal';
export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: 'FlowSupply Lifetime Deal',
  description: 'Get lifetime access to FlowSupply',
};
export default async function Page() {
  return <LifetimeDeal />;
}
