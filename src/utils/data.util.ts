export function getDateUTCNextYear() {

    let newDate = new Date()
    let date = newDate.getDate();
    let dia = newDate.getUTCDay();
    let mes = newDate.getUTCMonth() + 1;
    let ano = newDate.getFullYear() + 1;
    let hora = newDate.getUTCHours();
    let minuto = newDate.getUTCMinutes();
    let segundo = newDate.getUTCSeconds();
    var diasemana = '';
    var mesnome = '';

    if ( dia === 0 ) {
        diasemana = 'Mon';
    } else  if ( dia === 1 ) {
        diasemana = 'Tue';
    } else if ( dia === 2 ) {
        diasemana = 'Wed';
    } else if ( dia === 3 ) {
        diasemana = 'Thu';
    } else if ( dia === 4 ) {
        diasemana = 'Fri';
    } else if ( dia === 5 ) {
        diasemana = 'Sat';
    } else if ( dia === 6 ) {
        diasemana = 'Sun';
    } 

    //.toGMTString

    if ( mes === 1 ) {
        mesnome = 'Jan';
    } else if ( mes === 2 ) {
        mesnome = 'Feb';
    } else if ( mes === 3 ) {
        mesnome = 'Mar';
    } else if ( mes === 4 ) {
        mesnome = 'Apr';
    } else if ( mes === 5 ) {
        mesnome = 'May';
    } else if ( mes === 6 ) {
        mesnome = 'Jun';
    } else if ( mes === 7 ) {
        mesnome = 'Jul';
    } else if ( mes === 8 ) {
        mesnome = 'Ago';
    } else if ( mes === 9 ) {
        mesnome = 'Sep';
    } else if ( mes === 10 ) {
        mesnome = 'Oct';
    } else if ( mes === 11 ) {
        mesnome = 'Nov';
    } else if ( mes === 12 ) {
        mesnome = 'Dec';
    }

    return `${diasemana}, ${date} ${mesnome} ${ano} ${hora}:${minuto}:${segundo} GMT`
}