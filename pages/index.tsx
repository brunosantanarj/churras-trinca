import { DefaultLayout } from '@presentation/layouts';
import { LoginForm } from '@presentation/components/forms';

export default function Home() {
  return (
    <DefaultLayout allFeatured>
      <LoginForm />
    </DefaultLayout>
  );
}
