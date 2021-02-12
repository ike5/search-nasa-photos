export default function test(message = "ENTRY HERE") {
    console.log(message);
}

export function testarray(...a){
    console.table(a);
}