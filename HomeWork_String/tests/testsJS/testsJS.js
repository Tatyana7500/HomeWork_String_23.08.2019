describe('Tests for String', function () {
    describe('numberOfCharactersInString', function() {

        it('should return undefined because I caught a Error \'Second or third parameter undefined or null\' if all arguments undefined', function () {
            //Given
            const str = undefined;
            const char1 = undefined;
            const char2 = undefined;
            const expected = undefined;

            //When
            const actual = numberOfCharactersInString(str, char1, char2);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Second or third parameter undefined or null\' if all arguments null', function () {
            //Given
            const str = null;
            const char1 = null;
            const char2 = null;
            const expected = undefined;

            //When
            const actual = numberOfCharactersInString(str, char1, char2);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Input param in not a string\' if arguments (undefined, "n", "l")', function () {
            //Given
            const str = undefined;
            const char1 = "n";
            const char2 = "l";
            const expected = undefined;

            //When
            const actual = numberOfCharactersInString(str, char1, char2);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Second or third parameter undefined or null\' if arguments (undefined, "n", undefined)', function () {
            //Given
            const str = undefined;
            const char1 = "n";
            const char2 = undefined;
            const expected = undefined;

            //When
            const actual = numberOfCharactersInString(str, char1, char2);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Second or third parameter undefined or null\' if arguments (undefined, undefined, "l")', function () {
            //Given
            const str = undefined;
            const char1 = undefined;
            const char2 = "l";
            const expected = undefined;

            //When
            const actual = numberOfCharactersInString(str, char1, char2);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Second or third parameter undefined or null\' if arguments ("string of the best string", undefined, undefined)', function () {
            //Given
            const str = "string of the best string";
            const char1 = undefined;
            const char2 = undefined;
            const expected = undefined;

            //When
            const actual = numberOfCharactersInString(str, char1, char2);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Second or third parameter undefined or null\' if arguments ("string of the best string", "e", undefined)', function () {
            //Given
            const str = "string of the best string";
            const char1 = "e";
            const char2 = undefined;
            const expected = undefined;

            //When
            const actual = numberOfCharactersInString(str, char1, char2);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Second or third parameter undefined or null\' if arguments ("string of the best string", undefined, "o")', function () {
            //Given
            const str = "string of the best string";
            const char1 = undefined;
            const char2 = "o";
            const expected = undefined;

            //When
            const actual = numberOfCharactersInString(str, char1, char2);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Second or third parameter undefined or null\' if arguments ("string of the best string", null, null)', function () {
            //Given
            const str = "string of the best string";
            const char1 = null;
            const char2 = null;
            const expected = undefined;

            //When
            const actual = numberOfCharactersInString(str, char1, char2);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Second or third parameter undefined or null\' if arguments ("string of the best string", null, "o")', function () {
            //Given
            const str = "string of the best string";
            const char1 = null;
            const char2 = "o";
            const expected = undefined;

            //When
            const actual = numberOfCharactersInString(str, char1, char2);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Second or third parameter undefined or null\' if arguments ("string of the best string", "n", null)', function () {
            //Given
            const str = "string of the best string";
            const char1 = "n";
            const char2 = null;
            const expected = undefined;

            //When
            const actual = numberOfCharactersInString(str, char1, char2);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return FALSE if arguments: ("string of the best string", "s", "r")', function () {
            //Given
            const str = "string of the best string";
            const char1 = "s";
            const char2 = "r";
            const expected = false;

            //When
            const actual = numberOfCharactersInString(str, char1, char2);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return TRUE if arguments: ("string of the best string", "r", "i")', function () {
            //Given
            const str = "string of the best string";
            const char1 = "r";
            const char2 = "i";
            const expected = true;

            //When
            const actual = numberOfCharactersInString(str, char1, char2);

            //Then
            assert.strictEqual(actual, expected);
        });
    });

    describe('truncate', function() {

        it('should return undefined because I caught a Error \'Second param in not a number or undefined/null\' if all arguments undefined', function () {
            //Given
            const str = undefined;
            const maxlength = undefined;
            const expected = undefined;

            //When
            const actual = truncate(str, maxlength);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Second param in not a number or undefined/null\' if all arguments null', function () {
            //Given
            const str = null;
            const maxlength = null;
            const expected = undefined;

            //When
            const actual = truncate(str, maxlength);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Second param in not a number or undefined/null\' if arguments ("string string", null)', function () {
            //Given
            const str = "string string";
            const maxlength = null;
            const expected = undefined;

            //When
            const actual = truncate(str, maxlength);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Second param in not a number or undefined/null\' if arguments ("string string", undefined)', function () {
            //Given
            const str = "string string";
            const maxlength = undefined;
            const expected = undefined;

            //When
            const actual = truncate(str, maxlength);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Input param in not a string\' if arguments (undefined, 10)', function () {
            //Given
            const str = undefined;
            const maxlength = 10;
            const expected = undefined;

            //When
            const actual = truncate(str, maxlength);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Input param in not a string\' if arguments (null, 10)', function () {
            //Given
            const str = null;
            const maxlength = 10;
            const expected = undefined;

            //When
            const actual = truncate(str, maxlength);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Second param in not a number or undefined/null or < 0\' if arguments ("string undefined string", -22)', function () {
            //Given
            const str = "string undefined string";
            const maxlength = -22;
            const expected = undefined;

            //When
            const actual = truncate(str, maxlength);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return "string un…" if arguments ("string undefined string", 10)', function () {
            //Given
            const str = "string undefined string";
            const maxlength = 10;
            const expected = "string un…";

            //When
            const actual = truncate(str, maxlength);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return "string undefined string" if arguments ("string undefined string", 25)', function () {
            //Given
            const str = "string undefined string";
            const maxlength = 25;
            const expected = "string undefined string";

            //When
            const actual = truncate(str, maxlength);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return "string undefined string" if arguments ("string undefined string", 23)', function () {
            //Given
            const str = "string undefined string";
            const maxlength = 23;
            const expected = "string undefined string";

            //When
            const actual = truncate(str, maxlength);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return "string undefined stri…" if arguments ("string undefined string", 22)', function () {
            //Given
            const str = "string undefined string";
            const maxlength = 22;
            const expected = "string undefined stri…";

            //When
            const actual = truncate(str, maxlength);

            //Then
            assert.strictEqual(actual, expected);
        });
    });

    describe('cutSubstringOfString', function() {

        it('should return undefined because I caught a Error \'Input param in not a string\' if all arguments undefined', function () {
            //Given
            const str = undefined;
            const subs = undefined;
            const expected = undefined;

            //When
            const actual = cutSubstringOfString(str, subs);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Input param in not a string\' if all arguments null', function () {
            //Given
            const str = null;
            const subs = null;
            const expected = undefined;

            //When
            const actual = cutSubstringOfString(str, subs);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Input param in not a string\' if arguments (undefined, "str")', function () {
            //Given
            const str = undefined;
            const subs = "str";
            const expected = undefined;

            //When
            const actual = cutSubstringOfString(str, subs);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Input param in not a string\' if arguments ("string string", undefined)', function () {
            //Given
            const str = "string string";
            const subs = undefined;
            const expected = undefined;

            //When
            const actual = cutSubstringOfString(str, subs);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Input param in not a string\' if arguments (null, "str")', function () {
            //Given
            const str = null;
            const subs = "str";
            const expected = undefined;

            //When
            const actual = cutSubstringOfString(str, subs);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return undefined because I caught a Error \'Input param in not a string\' if arguments ("string string", null)', function () {
            //Given
            const str = "string string";
            const subs = null;
            const expected = undefined;

            //When
            const actual = cutSubstringOfString(str, subs);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return "string string" if arguments ("string string", "cool)', function () {
            //Given
            const str = "string string";
            const subs = "cool";
            const expected = "string string";

            //When
            const actual = cutSubstringOfString(str, subs);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return "string string" if arguments ("string string cool", "cool)', function () {
            //Given
            const str = "string string cool";
            const subs = "cool";
            const expected = "string string";

            //When
            const actual = cutSubstringOfString(str, subs);

            //Then
            assert.strictEqual(actual, expected);
        });

        it('should return "string string" if arguments ("string cool string cool", "cool)', function () {
            //Given
            const str = "string cool string cool";
            const subs = "cool";
            const expected = "string string";

            //When
            const actual = cutSubstringOfString(str, subs);

            //Then
            assert.strictEqual(actual, expected);
        });
    });
});