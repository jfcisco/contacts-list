type ContactNumbersInputProps = {
  value: string[];
  onChange: () => void;
};
/** Custom input to get a list of contact numbers from a user  */
export function ContactNumbersInput({ value, onChange }: ContactNumbersInputProps): JSX.Element {
  return (<p className="mb-2">Contact Numbers: Exciting feature coming soon!</p>);
}
