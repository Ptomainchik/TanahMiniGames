import { useSelector, useDispatch } from 'react-redux';
import { 
  increment, 
  decrement, 
  incrementByAmount, 
  reset,
  setStatus 
} from '../Redux/Slices/CounterSlice';

export const Counter = () => {
  // useDispatch - чтобы вызывать actions
  const dispatch = useDispatch();
  
  // useSelector - чтобы читать данные из store
  const value = useSelector((state: any) => state.counter.value);
  const history = useSelector((state: any) => state.counter.history);
  const status = useSelector((state: any) => state.counter.status);
  
  // Можно несколько селекторов
  // const { value, history } = useSelector((state) => state.counter);

  const handleAddCustom = () => {
    const amount = Number(prompt('Сколько добавить?')) || 0;
    dispatch(incrementByAmount(amount));
  };

  return (
    <div>
      <h2>Счетчик: {value}</h2>
      <p>Статус: {status}</p>
      
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={handleAddCustom}>Добавить</button>
      <button onClick={() => dispatch(reset())}>Сброс</button>
      <button onClick={() => dispatch(setStatus('loading'))}>
        Загружаю...
      </button>
      
      <h3>История:</h3>
      <ul>
        {history.map((item: any, index: any) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};