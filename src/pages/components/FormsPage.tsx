import { BasicForm, TextInputField } from '@/components/Forms/InputForm';
import { BasicSelectInput } from '@/components/SelectInput/SelectInputs';
import { useState } from 'react';

function FormsPage() {
	const [selected, setSelected] = useState('React');
	return (
		<>
			<BasicForm />
			<TextInputField />
			<BasicSelectInput
				data={["React", "Angular", "Vue", "Svelte", "burger"]}
				value={selected}
				onChange={(value) => setSelected(value ?? '')}
			/>
		</>
	);
}

export { FormsPage };
