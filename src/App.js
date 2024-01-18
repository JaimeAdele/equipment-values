import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import equipmentValues from './equipmentValues';
import './App.css';

function App() {
  const [price, setPrice] = useState(0);
  const [points, setPoints] = useState(0)
  const [quantities, setQuantities] = useState({
    keyFob: 0,
    dwSensor: 0,
    shockSensor: 0,
    motionSensor: 0,
    glassBreakSensor: 0,
    coSensor: 0,
    smokeSensor: 0,
    outdoorSiren: 0,
    indoorCamera: 0,
    outdoorCamera: 0,
    doorbellCamera: 0,
    lampMod: 0,
    thermostat: 0,
    garageOpener: 0,
    doorLock: 0,
    secondaryKeypad: 0,
    eero: 0
  });

  const calculateTotals = () => {
    let priceSum = 0;
    let pointSum = 0;
    for (const [item, quantity] of Object.entries(quantities)) {
      priceSum += quantity * equipmentValues[item].price;
      pointSum += quantity * equipmentValues[item].points;
    }
    setPrice(priceSum);
    setPoints(pointSum);
  };

  // useEffect(() => {
  //   let priceSum = 0;
  //   let pointSum = 0;
  //   for (const [item, quantity] of Object.entries(quantities)) {
  //     priceSum += quantity * equipmentValues[item].price;
  //     pointSum += quantity * equipmentValues[item].points;
  //   }
  //   setPrice(priceSum);
  //   setPoints(pointSum);
  // }, [quantities]);

  return (
    <div className='App p-5 d-md-flex justify-content-evenly gap-4'>
      <Form className='mb-5'>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-75'>Key Fob</InputGroup.Text>
          <Form.Control
            id='keyFob'
            type='number'
            className='text-center'
            value={quantities.keyFob}
            onChange={(e) =>
              setQuantities({ ...quantities, keyFob: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-75'>
            Door / Window Sensor
          </InputGroup.Text>
          <Form.Control
            id='dwSensor'
            type='number'
            className='text-center'
            value={quantities.dwSensor}
            onChange={(e) =>
              setQuantities({ ...quantities, dwSensor: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-75'>Shock Sensor</InputGroup.Text>
          <Form.Control
            id='shockSensor'
            type='number'
            className='text-center'
            value={quantities.shockSensor}
            onChange={(e) =>
              setQuantities({ ...quantities, shockSensor: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-75'>Motion Sensor</InputGroup.Text>
          <Form.Control
            id='motionSensor'
            type='number'
            className='text-center'
            value={quantities.motionSensor}
            onChange={(e) =>
              setQuantities({ ...quantities, motionSensor: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-75'>Glass Break Sensor</InputGroup.Text>
          <Form.Control
            id='glassBreakSensor'
            type='number'
            className='text-center'
            value={quantities.glassBreakSensor}
            onChange={(e) =>
              setQuantities({ ...quantities, glassBreakSensor: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-75'>CO Sensor</InputGroup.Text>
          <Form.Control
            id='coSensor'
            type='number'
            className='text-center'
            value={quantities.coSensor}
            onChange={(e) =>
              setQuantities({ ...quantities, coSensor: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-75'>Smoke Sensor</InputGroup.Text>
          <Form.Control
            id='smokeSensor'
            type='number'
            className='text-center'
            value={quantities.smokeSensor}
            onChange={(e) =>
              setQuantities({ ...quantities, smokeSensor: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-75'>Outdoor Siren</InputGroup.Text>
          <Form.Control
            id='outdoorSiren'
            type='number'
            className='text-center'
            value={quantities.outdoorSiren}
            onChange={(e) =>
              setQuantities({ ...quantities, outdoorSiren: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-75'>Indoor Camera</InputGroup.Text>
          <Form.Control
            id='indoorCamera'
            type='number'
            className='text-center'
            value={quantities.indoorCamera}
            onChange={(e) =>
              setQuantities({ ...quantities, indoorCamera: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-75'>Outdoor Camera</InputGroup.Text>
          <Form.Control
            id='outdoorCamera'
            type='number'
            className='text-center'
            value={quantities.outdoorCamera}
            onChange={(e) =>
              setQuantities({ ...quantities, outdoorCamera: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-75'>Doorbell Camera</InputGroup.Text>
          <Form.Control
            id='doorbellCamera'
            type='number'
            className='text-center'
            value={quantities.doorbellCamera}
            onChange={(e) =>
              setQuantities({ ...quantities, doorbellCamera: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-75'>
            Lamp Module / Smart Plug
          </InputGroup.Text>
          <Form.Control
            id='lampMod'
            type='number'
            className='text-center'
            value={quantities.lampMod}
            onChange={(e) =>
              setQuantities({ ...quantities, lampMod: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-75'>Thermostat</InputGroup.Text>
          <Form.Control
            id='thermostat'
            type='number'
            className='text-center'
            value={quantities.thermostat}
            onChange={(e) =>
              setQuantities({ ...quantities, thermostat: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-75'>Garage Opener</InputGroup.Text>
          <Form.Control
            id='garageOpener'
            type='number'
            className='text-center'
            value={quantities.garageOpener}
            onChange={(e) =>
              setQuantities({ ...quantities, garageOpener: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-75'>Door Lock</InputGroup.Text>
          <Form.Control
            id='doorLock'
            type='number'
            className='text-center'
            value={quantities.doorLock}
            onChange={(e) =>
              setQuantities({ ...quantities, doorLock: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-75'>Secondary Keypad</InputGroup.Text>
          <Form.Control
            id='secondaryKeypad'
            type='number'
            className='text-center'
            value={quantities.secondaryKeypad}
            onChange={(e) =>
              setQuantities({ ...quantities, secondaryKeypad: e.target.value })
            }
          />
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-75'>eero</InputGroup.Text>
          <Form.Control
            id='eero'
            type='number'
            className='text-center'
            value={quantities.eero}
            onChange={(e) =>
              setQuantities({ ...quantities, eero: e.target.value })
            }
          />
        </InputGroup>

        <Button variant='outline-primary' onClick={calculateTotals}>Calculate</Button>
      </Form>

      <Form className='d-flex flex-column justify-content-center'>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-50'>Price</InputGroup.Text>
          <Form.Control
            id='price'
            type='number'
            className='text-center'
            value={price}
            readOnly
            disabled
          />
        </InputGroup>
        <InputGroup className='mb-2'>
          <InputGroup.Text className='w-50'>Points</InputGroup.Text>
          <Form.Control
            id='points'
            type='number'
            className='text-center'
            value={points}
            readOnly
            disabled
          />
        </InputGroup>
      </Form>
    </div>
  );
}

export default App;
