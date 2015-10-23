'use strict';

/** 
   * GET /
   * 
   * @method query
   * @summary 測試查詢 MySQL
   */
exports.query = function(req, res, next) {
    var workflow = new req.app.utility.workflow(req, res);

    workflow.on('listPost', function() {
  
        req.app.connection.query('SELECT * FROM <your table>', function(err, rows, fields) {
            if (err) {
                workflow.outcome.errors.push(err);
                return workflow.emit('response');
            }
            
            workflow.outcome.data = rows;
            return workflow.emit('response');
        });
      
    });

    return workflow.emit('listPost');
};