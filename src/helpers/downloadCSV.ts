import * as XLSX from 'xlsx';

export const exportExcel = (data:any) => {
    if (data.length > 0) {
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data, { dateNF: 'mm/dd/yyyy;@', cellDates: true });
  
        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Registro');
  
        /* save to file */
        XLSX.writeFile(wb, `Registro.xlsx`);
      } else {
        console.log('No hay registro para esa búsqueda.')
      }
}