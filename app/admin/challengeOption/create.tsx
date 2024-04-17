import { BooleanInput, Create, Datagrid, List, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextField, TextInput, required } from "react-admin"

export const ChallengeOptionCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="text" validate={[required()]} label="Text"/>
                <BooleanInput source="correct" label="Correct Option"/>
                <ReferenceInput source="challengeId" reference="challenges"/>
                <TextInput source="imageSrc" label="Image URL"/>
                <TextInput source="audioSrc" label="Audio URL"/>
            </SimpleForm>
        </Create>
    )
}