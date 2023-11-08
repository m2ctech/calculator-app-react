import React, { useState } from 'react';
import { Box, Grid, Button, Text, CSSReset, extendTheme, ChakraProvider, Flex} from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.100',
        textAlign: 'center',
        fontSize: '24px',
      },
    },
  },
});

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=' && expression) {
      try {
        const result = eval(expression);
        setDisplay(result.toString());
        setExpression(result.toString());
      } catch (error) {
        setDisplay('Error');
        setExpression('');
      }
    } else if (value === 'C') {
      setDisplay('0');
      setExpression('');
    } else {
      if (expression === '0' && !isNaN(value)) {
        setExpression(value);
        setDisplay(value);
      } else {
        setExpression(expression + value);
        setDisplay(expression + value);
      }
    }
  };

  return (
    <Box mt={10} p={4} bg="blue.500" borderRadius="10px">
      <Text fontSize="3xl" mb={4} bg="white" borderRadius="5px" textAlign="right" pr="8px">{display}</Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={2}>
        {['7', '8', '9', '/'].map((button) => (
          <Button key={button} onClick={() => handleButtonClick(button)}>{button}</Button>
        ))}
      </Grid>
      <Grid templateColumns="repeat(4, 1fr)" gap={2} mt="5px">
        {['4', '5', '6', '*'].map((button) => (
          <Button key={button} onClick={() => handleButtonClick(button)}>{button}</Button>
        ))}
      </Grid>
      <Grid templateColumns="repeat(4, 1fr)" gap={2} mt="5px">
        {['1', '2', '3', '-'].map((button) => (
          <Button key={button} onClick={() => handleButtonClick(button)}>{button}</Button>
        ))}
      </Grid>
      <Grid templateColumns="repeat(4, 1fr)" gap={2} mt="5px">
        {['C', '0', '=', '+'].map((button) => (
          <Button key={button} onClick={() => handleButtonClick(button)}>{button}</Button>
        ))}
      </Grid>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Flex height="100vh" alignItems="center" justifyContent="center" width="100vw">
        <Calculator />
      </Flex>
    </ChakraProvider>
  );
}

export default App;






