import { checkToken } from '../../utilities/users-service';
import NewRoundForm  from '../../components/NewRoundForm/NewRoundForm'

export default function OrderHistoryPage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  
  return (
    <>
      <h1>New Round</h1>
      <NewRoundForm />
    </>
  );
}