import React, { useEffect, useState } from 'react';
import useAxios from '../../useAxios'
import { Container, Text, Button } from './styles';

function Main() {
  const [url, setUrl] = useState('https://www.boredapi.com/api/activity') 
  const [refresh, setRefresh] = useState(0) 
  const bored = useAxios(url, refresh)

  return (
    <Container>
      <Text>
        {bored.activity}
      </Text>
      <Button onClick={() => setRefresh( refresh + 1 )}>
        new
      </Button>
    </Container>
  );
}

export default Main;