import { Create, Datagrid, Edit, List, NumberInput, ReferenceInput, SimpleForm, TextField, TextInput, required } from "react-admin"

export const UnitEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="title" validate={[required()]} label="Title"/>
                <TextInput source="description" validate={[required()]} label="Description"/>
                <NumberInput source="id" validate={[required()]} label="Id"/>
                <ReferenceInput source="courseId" reference="courses"/>
                <NumberInput source="order" validate={[required()]} label="order" />
            </SimpleForm>
        </Edit>
    )
}