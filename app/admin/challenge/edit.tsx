import { Create, Datagrid, Edit, List, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextField, TextInput, required } from "react-admin"

export const ChallengeEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="question" validate={[required()]} label="Question"/>
                <SelectInput 
                    source="type"
                    choices={[
                        {
                            id: "SELECT",
                            name: "SELECT",
                        },
                        {
                            id: "ASSIST",
                            name: "ASSIST",
                        }
                    ]}
                    validate={[required()]}
                />
                <ReferenceInput source="lessonId" reference="lessons"/>
                <NumberInput source="order" validate={[required()]} label="order" />
            </SimpleForm>
        </Edit>
    )
}