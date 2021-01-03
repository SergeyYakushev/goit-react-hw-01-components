import Conteiner from './components/Conteiner';
import Profile from './components/Profile';
import Statistic from './components/Statistic';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

export default function App() {
  return (
    <div>
      <Conteiner>
        <h2>Task 1</h2>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Conteiner>
      <Conteiner>
        <h2>Task 2</h2>
        <Statistic title="Upload stats" stats={statisticalData} />
      </Conteiner>
      <Conteiner>
        <h2>Task 3</h2>
        <FriendList friends={friends} />
      </Conteiner>
      <Conteiner>
        <h2>Task 4</h2>
        <TransactionHistory items={transactions} />
      </Conteiner>
    </div>
  );
}
