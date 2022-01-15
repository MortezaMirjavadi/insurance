import React, {useEffect} from "react";
import {createUseStyles} from "react-jss";
import {useDispatch} from "react-redux";
import {getCarType} from "@Store/thirdPartyInsurance/Actions";
import TextField from "@Components/DesignSystem/TextField/TextField";

const useStyles = createUseStyles({
    root: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textField: {
        width: 100,
        height: 50,
    }
});

const ThirdPartyInsurance = () => {

    const localStyle = useStyles();
    // const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getCarType()).then(result => {
        //     console.log(result);
        // })
    }, []);

    return(
        <div className={localStyle.root}>
            <div className={localStyle.textField}>
                <TextField label="نام خانوادگی"/>
            </div>
        </div>
    )
};

export default ThirdPartyInsurance;
