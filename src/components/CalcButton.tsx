import { Button } from '@/components/ui/button';

type Props = {
  value: string;
  handleChangeValue: (value: string) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function CalcButton(props: Props) {
  const { handleChangeValue, value, ...rest } = props;

  return (
    <Button
      onClick={() => handleChangeValue(value)}
      variant="outline"
      {...rest}
    >
      {value}
    </Button>
  );
}
