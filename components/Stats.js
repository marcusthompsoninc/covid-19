import styled from 'styled-components';
import useStats from '../utils/useStats';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const StatBlock = styled.div`
  background: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding:1rem 0 2rem 0;
  }
`;

const StatBlockConfirmed = styled(StatBlock)`
  background:orange;
`;

const StatBlockDeaths = styled(StatBlock)`
  background:red;
`;

const StatBlockRecovered = styled(StatBlock)`
  background:green;
`;

const LastUpdated = styled.div`
font-size:0.8rem;
border-radius:0.5rem;
padding:0.5rem;
text-align:left;

@media (max-width: 768px) {
    text-align:center
  }

`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  console.log(stats, loading, error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <StatGrid>
      <StatBlockConfirmed>
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value.toLocaleString()}</span>
      </StatBlockConfirmed>
      <StatBlockDeaths>
        <h3>Deaths:</h3>
        <span>{stats.deaths.value.toLocaleString()}</span>
      </StatBlockDeaths>
      <StatBlockRecovered>
        <h3>Recovered:</h3>
        <span>{stats.recovered.value.toLocaleString()}</span>
      </StatBlockRecovered>
      <LastUpdated>Last updated: {stats.lastUpdate}</LastUpdated>
    </StatGrid>
    
  );
}
