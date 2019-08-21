//if no onSuccess and onFailure action creator callbacks are present, they default to a function called noOp
const noOp = () => ({type: "NO_OP"});

export const apiPayloadCreator =({
    url="/",
    method="GET",
    onSuccess=noOp,
    onFailure=noOp,
    label="",
    data=null
}) => ({
    url,
    method,
    onSuccess,
    onFailure,
    data,
    label
})

//this is the payload creator to be passed into the createAction call