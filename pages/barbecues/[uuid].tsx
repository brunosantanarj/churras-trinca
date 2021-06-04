import { NextPageContext } from 'next';
import { useRecoilValue } from 'recoil';
import { DefaultLayout } from '@presentation/layouts';
import { barbecueState } from '@presentation/containers/barbecues/atoms';
import { DetailedBarbecue } from '@presentation/components/barbecue';
import { BarbecueContainerProps } from '@presentation/containers';

type Props = BarbecueContainerProps & { uuid: string }

const BarbecueByUUID = ({ uuid }: Props) => {
  const barbecues = useRecoilValue(barbecueState);
  const selectedBarbecue = barbecues.find(barbecue => barbecue.id === uuid);

  function renderContent() {
    if (!selectedBarbecue) {
      return (
        <h3 className="text-center font-bold text-xl">
          Não há churrasco selecionado com o identificador "{uuid}"
        </h3>
      )
    }

    return (
      <DetailedBarbecue selectedBarbecue={selectedBarbecue} />
    );
  }

  return (
    <DefaultLayout>
      <>{renderContent()}</>
    </DefaultLayout>
  )
}

BarbecueByUUID.getInitialProps = (ctx: NextPageContext) => ({ uuid: ctx.query.uuid });

export default BarbecueByUUID;
