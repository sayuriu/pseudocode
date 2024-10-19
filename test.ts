import { inspect } from "node:util";
import { lexer } from "./lexer";
import { Parser } from './parser.ts';
import { readFileSync } from "node:fs";

const sourceInput = readFileSync('./test.sayu', 'utf-8');

function run(sourceInput: string) {
    const tokens = lexer(sourceInput);
    console.log(tokens.map(t => t && t.toString()))

    // const ast = new ASTGrammarParser(tokens)
    const ast2 = new Parser(tokens)
    // console.log(inspect(ast.parse(), { depth: null, colors: true }));
    console.log(inspect(ast2.parse(), { depth: null, colors: true }));
}

run(sourceInput);