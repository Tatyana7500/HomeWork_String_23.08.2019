class CustomError {
    constructor(message) {
        this.message = message;
        this.name = "CustomError";
    }
}

const numberOfCharactersInString = (str, char1, char2) => {
    try {
        if (typeof str === "string") {
            let count1 = 0;
            let count2 = 0;

            if (char1 && char2) {
                let string = str.toLowerCase();

                for (let i = 0; i < string.length; i++) {
                    if (string[i] === char1) {
                        count1++;
                    }

                    if (string[i] === char2) {
                        count2++;
                    }
                }

                return (count1 === count2);
            } else {
                throw new CustomError('Second or third parameter undefined or null');
            }
        } else {
            throw new CustomError('Input param in not a string');
        }
    } catch (e) {
        if (e.name === "CustomError") {
            console.log(`Error: ${e.message}`);
        } else {
            throw e;
        }
    }
};

const truncate = (str, maxlength) => {
    try {
        if (typeof maxlength === "number" && maxlength > 0) {
            if (typeof str === "string") {
                if (str.length > maxlength) {
                    str = str.substr(0, maxlength - 1) + "…";
                }

                return str;
            } else {
                throw new CustomError('Input param in not a string');
            }
        } else {
            throw new CustomError('Second param in not a number or undefined/null or < 0');
        }
    } catch (e) {
        if (e.name === "CustomError") {
            console.log(`Error: ${e.message}`);
        } else {
            throw e;
        }
    }
};

const cutSubstringOfString = (str, subs) => {
    try {
        if (typeof str === "string" && typeof subs === "string") {
            while (str.indexOf(subs) !== -1) {
                str = str.substr(0, str.indexOf(subs)) + str.substr(str.indexOf(subs) + subs.length, str.length);
            }

            str = str.replace(/\s+/g, ' ').trim();

            return str;
        } else {
            throw new CustomError('Input param in not a string');
        }
    } catch (e) {
        if(e.name === 'CustomError')
            console.log(`Error: ${e.message}`);
        else {
            throw e;
        }
    }
};