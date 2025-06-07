export const dynamic = 'force-dynamic';
import { AnalyticsComponent } from '@gitroom/frontend/components/analytics/analytics.component';
import { Metadata } from 'next';
import { PlatformAnalytics } from '@gitroom/frontend/components/platform-analytics/platform.analytics';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: 'FlowSupply Analytics',
  description: 'Analytics and insights for your social media',
};
export default async function Index() {
  return (
    <>
      {isGeneralServerSide() ? <PlatformAnalytics /> : <AnalyticsComponent />}
    </>
  );
}
