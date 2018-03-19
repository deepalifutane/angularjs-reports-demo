 /*
 Application wide static content goes here
*/

app.value(
    'globalValues', {
        pageHeader: 'Collaborate Reporting',
        searchLabel: 'Search',
        searchButtonLabel: 'Go!',
        sortByLabel: 'Sort By',
        sortOrderLabel: 'Sort Order',
        viewReportLabel: 'View Report',
        noResultHeader: 'No results found',
        noResultErrorMsg: ' We couldn’t find any results for the search or filters that were selected. Delete the search or select new filters, and then try again.',
        globalErrorMsg: 'Something isn\'t working!',
        asc:'Asc',
        desc:'Desc',
        errorMsgStr:'error',
        path:{
        	dataAPI:'src/scripts/data/report-data.json'
        }
    });
