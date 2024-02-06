$(document).ready(function() {
    var dataTable = $('#myTable').DataTable({
        "pageLength": 200,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        "dom": "<'row'<'col-sm-12'tr>><'row'<'col-sm-6'l><'col-sm-6'p>>",
        "autoWidth": false
    });

    $('#loadTable').click(function() {
        var tableName = $('#tableName').val();
        if (data[tableName]) {
            dataTable.clear();
            data[tableName].forEach(function(rowData) {
                dataTable.row.add([
                    rowData["CN"],
                    rowData["OS"],
                    rowData["R"],
                    rowData["S"],
                    rowData["N"]
                ]).draw();
            });
        }
    });
});
