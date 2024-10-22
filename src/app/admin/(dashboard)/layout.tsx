import { ChildrenType } from '@/components/@core/types';
import Navbar from '@/components/@layouts/components/vertical/Navbar';
import LayoutWrapper from '@/components/@layouts/LayoutWrapper';
import VerticalLayout from '@/components/@layouts/VerticalLayout';
import VerticalFooter from '@/components/layout/vertical/Footer';
import Navigation from '@/components/layout/vertical/Navigation';
import Providers from '@/components/Providers';

const DashboardLayout = async ({ children }: ChildrenType) => {
  const direction = 'ltr';

  return (
    <Providers direction={direction}>
      <LayoutWrapper
        verticalLayout={
          <VerticalLayout navigation={<Navigation />} navbar={<Navbar />} footer={<VerticalFooter />} >
            {children}
          </VerticalLayout>
        }
      />
    </Providers>
  );
};

export default DashboardLayout; 
