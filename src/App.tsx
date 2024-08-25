import { Button } from '@/components/ui/button';
import CalcButton from '@/components/CalcButton';
import {
  DivideIcon,
  EqualIcon,
  MinusIcon,
  PlusIcon,
  XIcon,
  ArrowLeftIcon,
  TrashIcon,
} from '@/components/icons';
import useCalculate from './useCalculate';

function App() {
  const {
    result,
    operation,
    handleGoBack,
    calculateResult,
    handleChangeValue,
    handleClear,
  } = useCalculate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-500">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex justify-end mb-4">
          <div className="text-card-foreground text-4xl font-mono">
            {result || operation || 0}
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="grid grid-cols-4 gap-4 w-full">
            <CalcButton value="7" handleChangeValue={handleChangeValue} />
            <CalcButton value="8" handleChangeValue={handleChangeValue} />
            <CalcButton value="9" handleChangeValue={handleChangeValue} />

            <Button
              onClick={() => handleChangeValue('/')}
              variant="outline"
              className="col-span-1"
            >
              <DivideIcon className="w-6 h-6" />
            </Button>

            <CalcButton value="4" handleChangeValue={handleChangeValue} />
            <CalcButton value="5" handleChangeValue={handleChangeValue} />
            <CalcButton value="6" handleChangeValue={handleChangeValue} />

            <Button
              onClick={() => handleChangeValue('-')}
              variant="outline"
              className="col-span-1"
            >
              <MinusIcon className="w-6 h-6" />
            </Button>

            <CalcButton value="1" handleChangeValue={handleChangeValue} />
            <CalcButton value="2" handleChangeValue={handleChangeValue} />
            <CalcButton value="3" handleChangeValue={handleChangeValue} />

            <Button
              onClick={() => handleChangeValue('+')}
              variant="outline"
              className="col-span-1"
            >
              <PlusIcon className="w-6 h-6" />
            </Button>

            <CalcButton
              value="0"
              handleChangeValue={handleChangeValue}
              className="col-span-2"
            />

            <Button
              onClick={calculateResult}
              variant="outline"
              className="col-span-1"
            >
              <EqualIcon className="w-6 h-6" />
            </Button>

            <Button
              onClick={() => handleChangeValue('x')}
              variant="outline"
              className="col-span-1"
            >
              <XIcon className="w-6 h-6" />
            </Button>

            <Button onClick={handleClear} variant="destructive">
              <TrashIcon className="w-6 h-6 mr-2" />
            </Button>

            <Button onClick={handleGoBack} variant="destructive">
              <ArrowLeftIcon className="w-6 h-6 mr-2" />
            </Button>

            <CalcButton value="(" handleChangeValue={handleChangeValue} />
            <CalcButton value=")" handleChangeValue={handleChangeValue} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
