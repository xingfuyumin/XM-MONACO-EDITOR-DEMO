
import { editor as MonacoEditor, Range as MonacoRange, KeyMod, KeyCode, languages } from 'monaco-editor';
import { useEffect, useRef } from 'react';
import { Form } from '@douyinfe/semi-ui';
import { format as SqlFormatter } from 'sql-formatter';

const sqlKeyWords = [
  'ABORT',
  'ABSOLUTE',
  'ACTION',
  'ADA',
  'ADD',
  'AFTER',
  'ALL',
  'ALLOCATE',
  'ALTER',
  'ALWAYS',
  'ANALYZE',
  'AND',
  'ANY',
  'ARE',
  'AS',
  'ASC',
  'ASSERTION',
  'AT',
  'ATTACH',
  'AUTHORIZATION',
  'AUTOINCREMENT',
  'AVG',
  'BACKUP',
  'BEFORE',
  'BEGIN',
  'BETWEEN',
  'BIT',
  'BIT_LENGTH',
  'BOTH',
  'BREAK',
  'BROWSE',
  'BULK',
  'BY',
  'CASCADE',
  'CASCADED',
  'CASE',
  'CAST',
  'CATALOG',
  'CHAR',
  'CHARACTER',
  'CHARACTER_LENGTH',
  'CHAR_LENGTH',
  'CHECK',
  'CHECKPOINT',
  'CLOSE',
  'CLUSTERED',
  'COALESCE',
  'COLLATE',
  'COLLATION',
  'COLUMN',
  'COMMIT',
  'COMPUTE',
  'CONFLICT',
  'CONNECT',
  'CONNECTION',
  'CONSTRAINT',
  'CONSTRAINTS',
  'CONTAINS',
  'CONTAINSTABLE',
  'CONTINUE',
  'CONVERT',
  'CORRESPONDING',
  'COUNT',
  'CREATE',
  'CROSS',
  'CURRENT',
  'CURRENT_DATE',
  'CURRENT_TIME',
  'CURRENT_TIMESTAMP',
  'CURRENT_USER',
  'CURSOR',
  'DATABASE',
  'DATE',
  'DAY',
  'DBCC',
  'DEALLOCATE',
  'DEC',
  'DECIMAL',
  'DECLARE',
  'DEFAULT',
  'DEFERRABLE',
  'DEFERRED',
  'DELETE',
  'DENY',
  'DESC',
  'DESCRIBE',
  'DESCRIPTOR',
  'DETACH',
  'DIAGNOSTICS',
  'DISCONNECT',
  'DISK',
  'DISTINCT',
  'DISTRIBUTED',
  'DO',
  'DOMAIN',
  'DOUBLE',
  'DROP',
  'DUMP',
  'EACH',
  'ELSE',
  'END',
  'END-EXEC',
  'ERRLVL',
  'ESCAPE',
  'EXCEPT',
  'EXCEPTION',
  'EXCLUDE',
  'EXCLUSIVE',
  'EXEC',
  'EXECUTE',
  'EXISTS',
  'EXIT',
  'EXPLAIN',
  'EXTERNAL',
  'EXTRACT',
  'FAIL',
  'FALSE',
  'FETCH',
  'FILE',
  'FILLFACTOR',
  'FILTER',
  'FIRST',
  'FLOAT',
  'FOLLOWING',
  'FOR',
  'FOREIGN',
  'FORTRAN',
  'FOUND',
  'FREETEXT',
  'FREETEXTTABLE',
  'FROM',
  'FULL',
  'FUNCTION',
  'GENERATED',
  'GET',
  'GLOB',
  'GLOBAL',
  'GO',
  'GOTO',
  'GRANT',
  'GROUP',
  'GROUPS',
  'HAVING',
  'HOLDLOCK',
  'HOUR',
  'IDENTITY',
  'IDENTITYCOL',
  'IDENTITY_INSERT',
  'IF',
  'IGNORE',
  'IMMEDIATE',
  'IN',
  'INCLUDE',
  'INDEX',
  'INDEXED',
  'INDICATOR',
  'INITIALLY',
  'INNER',
  'INPUT',
  'INSENSITIVE',
  'INSERT',
  'INSTEAD',
  'INT',
  'INTEGER',
  'INTERSECT',
  'INTERVAL',
  'INTO',
  'IS',
  'ISNULL',
  'ISOLATION',
  'JOIN',
  'KEY',
  'KILL',
  'LANGUAGE',
  'LAST',
  'LEADING',
  'LEFT',
  'LEVEL',
  'LIKE',
  'LIMIT',
  'LINENO',
  'LOAD',
  'LOCAL',
  'LOWER',
  'MATCH',
  'MATERIALIZED',
  'MAX',
  'MERGE',
  'MIN',
  'MINUTE',
  'MODULE',
  'MONTH',
  'NAMES',
  'NATIONAL',
  'NATURAL',
  'NCHAR',
  'NEXT',
  'NO',
  'NOCHECK',
  'NONCLUSTERED',
  'NONE',
  'NOT',
  'NOTHING',
  'NOTNULL',
  'NULL',
  'NULLIF',
  'NULLS',
  'NUMERIC',
  'OCTET_LENGTH',
  'OF',
  'OFF',
  'OFFSET',
  'OFFSETS',
  'ON',
  'ONLY',
  'OPEN',
  'OPENDATASOURCE',
  'OPENQUERY',
  'OPENROWSET',
  'OPENXML',
  'OPTION',
  'OR',
  'ORDER',
  'OTHERS',
  'OUTER',
  'OUTPUT',
  'OVER',
  'OVERLAPS',
  'PAD',
  'PARTIAL',
  'PARTITION',
  'PASCAL',
  'PERCENT',
  'PIVOT',
  'PLAN',
  'POSITION',
  'PRAGMA',
  'PRECEDING',
  'PRECISION',
  'PREPARE',
  'PRESERVE',
  'PRIMARY',
  'PRINT',
  'PRIOR',
  'PRIVILEGES',
  'PROC',
  'PROCEDURE',
  'PUBLIC',
  'QUERY',
  'RAISE',
  'RAISERROR',
  'RANGE',
  'READ',
  'READTEXT',
  'REAL',
  'RECONFIGURE',
  'RECURSIVE',
  'REFERENCES',
  'REGEXP',
  'REINDEX',
  'RELATIVE',
  'RELEASE',
  'RENAME',
  'REPLACE',
  'REPLICATION',
  'RESTORE',
  'RESTRICT',
  'RETURN',
  'RETURNING',
  'REVERT',
  'REVOKE',
  'RIGHT',
  'ROLLBACK',
  'ROW',
  'ROWCOUNT',
  'ROWGUIDCOL',
  'ROWS',
  'RULE',
  'SAVE',
  'SAVEPOINT',
  'SCHEMA',
  'SCROLL',
  'SECOND',
  'SECTION',
  'SECURITYAUDIT',
  'SELECT',
  'SEMANTICKEYPHRASETABLE',
  'SEMANTICSIMILARITYDETAILSTABLE',
  'SEMANTICSIMILARITYTABLE',
  'SESSION',
  'SESSION_USER',
  'SET',
  'SETUSER',
  'SHUTDOWN',
  'SIZE',
  'SMALLINT',
  'SOME',
  'SPACE',
  'SQL',
  'SQLCA',
  'SQLCODE',
  'SQLERROR',
  'SQLSTATE',
  'SQLWARNING',
  'STATISTICS',
  'SUBSTRING',
  'SUM',
  'SYSTEM_USER',
  'TABLE',
  'TABLESAMPLE',
  'TEMP',
  'TEMPORARY',
  'TEXTSIZE',
  'THEN',
  'TIES',
  'TIME',
  'TIMESTAMP',
  'TIMEZONE_HOUR',
  'TIMEZONE_MINUTE',
  'TO',
  'TOP',
  'TRAILING',
  'TRAN',
  'TRANSACTION',
  'TRANSLATE',
  'TRANSLATION',
  'TRIGGER',
  'TRIM',
  'TRUE',
  'TRUNCATE',
  'TRY_CONVERT',
  'TSEQUAL',
  'UNBOUNDED',
  'UNION',
  'UNIQUE',
  'UNKNOWN',
  'UNPIVOT',
  'UPDATE',
  'UPDATETEXT',
  'UPPER',
  'USAGE',
  'USE',
  'USER',
  'USING',
  'VACUUM',
  'VALUE',
  'VALUES',
  'VARCHAR',
  'VARYING',
  'VIEW',
  'VIRTUAL',
  'WAITFOR',
  'WHEN',
  'WHENEVER',
  'WHERE',
  'WHILE',
  'WINDOW',
  'WITH',
  'WITHIN GROUP',
  'WITHOUT',
  'WORK',
  'WRITE',
  'WRITETEXT',
  'YEAR',
  'ZONE',

  // Logical
  'ALL',
  'AND',
  'ANY',
  'BETWEEN',
  'EXISTS',
  'IN',
  'LIKE',
  'NOT',
  'OR',
  'SOME',
  // Set
  'EXCEPT',
  'INTERSECT',
  'UNION',
  // Join
  'APPLY',
  'CROSS',
  'FULL',
  'INNER',
  'JOIN',
  'LEFT',
  'OUTER',
  'RIGHT',
  // Predicates
  'CONTAINS',
  'FREETEXT',
  'IS',
  'NULL',
  // Pivoting
  'PIVOT',
  'UNPIVOT',
  // Merging
  'MATCHED',

  'AVG',
  'CHECKSUM_AGG',
  'COUNT',
  'COUNT_BIG',
  'GROUPING',
  'GROUPING_ID',
  'MAX',
  'MIN',
  'SUM',
  'STDEV',
  'STDEVP',
  'VAR',
  'VARP',
  // Analytic
  'CUME_DIST',
  'FIRST_VALUE',
  'LAG',
  'LAST_VALUE',
  'LEAD',
  'PERCENTILE_CONT',
  'PERCENTILE_DISC',
  'PERCENT_RANK',
  // Collation
  'COLLATE',
  'COLLATIONPROPERTY',
  'TERTIARY_WEIGHTS',
  // Azure
  'FEDERATION_FILTERING_VALUE',
  // Conversion
  'CAST',
  'CONVERT',
  'PARSE',
  'TRY_CAST',
  'TRY_CONVERT',
  'TRY_PARSE',
  // Cryptographic
  'ASYMKEY_ID',
  'ASYMKEYPROPERTY',
  'CERTPROPERTY',
  'CERT_ID',
  'CRYPT_GEN_RANDOM',
  'DECRYPTBYASYMKEY',
  'DECRYPTBYCERT',
  'DECRYPTBYKEY',
  'DECRYPTBYKEYAUTOASYMKEY',
  'DECRYPTBYKEYAUTOCERT',
  'DECRYPTBYPASSPHRASE',
  'ENCRYPTBYASYMKEY',
  'ENCRYPTBYCERT',
  'ENCRYPTBYKEY',
  'ENCRYPTBYPASSPHRASE',
  'HASHBYTES',
  'IS_OBJECTSIGNED',
  'KEY_GUID',
  'KEY_ID',
  'KEY_NAME',
  'SIGNBYASYMKEY',
  'SIGNBYCERT',
  'SYMKEYPROPERTY',
  'VERIFYSIGNEDBYCERT',
  'VERIFYSIGNEDBYASYMKEY',
  // Cursor
  'CURSOR_STATUS',
  // Datatype
  'DATALENGTH',
  'IDENT_CURRENT',
  'IDENT_INCR',
  'IDENT_SEED',
  'IDENTITY',
  'SQL_VARIANT_PROPERTY',
  // Datetime
  'CURRENT_TIMESTAMP',
  'DATEADD',
  'DATEDIFF',
  'DATEFROMPARTS',
  'DATENAME',
  'DATEPART',
  'DATETIME2FROMPARTS',
  'DATETIMEFROMPARTS',
  'DATETIMEOFFSETFROMPARTS',
  'DAY',
  'EOMONTH',
  'GETDATE',
  'GETUTCDATE',
  'ISDATE',
  'MONTH',
  'SMALLDATETIMEFROMPARTS',
  'SWITCHOFFSET',
  'SYSDATETIME',
  'SYSDATETIMEOFFSET',
  'SYSUTCDATETIME',
  'TIMEFROMPARTS',
  'TODATETIMEOFFSET',
  'YEAR',
  // Logical
  'CHOOSE',
  'COALESCE',
  'IIF',
  'NULLIF',
  // Mathematical
  'ABS',
  'ACOS',
  'ASIN',
  'ATAN',
  'ATN2',
  'CEILING',
  'COS',
  'COT',
  'DEGREES',
  'EXP',
  'FLOOR',
  'LOG',
  'LOG10',
  'PI',
  'POWER',
  'RADIANS',
  'RAND',
  'ROUND',
  'SIGN',
  'SIN',
  'SQRT',
  'SQUARE',
  'TAN',
  // Metadata
  'APP_NAME',
  'APPLOCK_MODE',
  'APPLOCK_TEST',
  'ASSEMBLYPROPERTY',
  'COL_LENGTH',
  'COL_NAME',
  'COLUMNPROPERTY',
  'DATABASE_PRINCIPAL_ID',
  'DATABASEPROPERTYEX',
  'DB_ID',
  'DB_NAME',
  'FILE_ID',
  'FILE_IDEX',
  'FILE_NAME',
  'FILEGROUP_ID',
  'FILEGROUP_NAME',
  'FILEGROUPPROPERTY',
  'FILEPROPERTY',
  'FULLTEXTCATALOGPROPERTY',
  'FULLTEXTSERVICEPROPERTY',
  'INDEX_COL',
  'INDEXKEY_PROPERTY',
  'INDEXPROPERTY',
  'OBJECT_DEFINITION',
  'OBJECT_ID',
  'OBJECT_NAME',
  'OBJECT_SCHEMA_NAME',
  'OBJECTPROPERTY',
  'OBJECTPROPERTYEX',
  'ORIGINAL_DB_NAME',
  'PARSENAME',
  'SCHEMA_ID',
  'SCHEMA_NAME',
  'SCOPE_IDENTITY',
  'SERVERPROPERTY',
  'STATS_DATE',
  'TYPE_ID',
  'TYPE_NAME',
  'TYPEPROPERTY',
  // Ranking
  'DENSE_RANK',
  'NTILE',
  'RANK',
  'ROW_NUMBER',
  // Replication
  'PUBLISHINGSERVERNAME',
  // Rowset
  'OPENDATASOURCE',
  'OPENQUERY',
  'OPENROWSET',
  'OPENXML',
  // Security
  'CERTENCODED',
  'CERTPRIVATEKEY',
  'CURRENT_USER',
  'HAS_DBACCESS',
  'HAS_PERMS_BY_NAME',
  'IS_MEMBER',
  'IS_ROLEMEMBER',
  'IS_SRVROLEMEMBER',
  'LOGINPROPERTY',
  'ORIGINAL_LOGIN',
  'PERMISSIONS',
  'PWDENCRYPT',
  'PWDCOMPARE',
  'SESSION_USER',
  'SESSIONPROPERTY',
  'SUSER_ID',
  'SUSER_NAME',
  'SUSER_SID',
  'SUSER_SNAME',
  'SYSTEM_USER',
  'USER',
  'USER_ID',
  'USER_NAME',
  // String
  'ASCII',
  'CHAR',
  'CHARINDEX',
  'CONCAT',
  'DIFFERENCE',
  'FORMAT',
  'LEFT',
  'LEN',
  'LOWER',
  'LTRIM',
  'NCHAR',
  'PATINDEX',
  'QUOTENAME',
  'REPLACE',
  'REPLICATE',
  'REVERSE',
  'RIGHT',
  'RTRIM',
  'SOUNDEX',
  'SPACE',
  'STR',
  'STUFF',
  'SUBSTRING',
  'UNICODE',
  'UPPER',
  // System
  'BINARY_CHECKSUM',
  'CHECKSUM',
  'CONNECTIONPROPERTY',
  'CONTEXT_INFO',
  'CURRENT_REQUEST_ID',
  'ERROR_LINE',
  'ERROR_NUMBER',
  'ERROR_MESSAGE',
  'ERROR_PROCEDURE',
  'ERROR_SEVERITY',
  'ERROR_STATE',
  'FORMATMESSAGE',
  'GETANSINULL',
  'GET_FILESTREAM_TRANSACTION_CONTEXT',
  'HOST_ID',
  'HOST_NAME',
  'ISNULL',
  'ISNUMERIC',
  'MIN_ACTIVE_ROWVERSION',
  'NEWID',
  'NEWSEQUENTIALID',
  'ROWCOUNT_BIG',
  'XACT_STATE',
  // TextImage
  'TEXTPTR',
  'TEXTVALID',
  // Trigger
  'COLUMNS_UPDATED',
  'EVENTDATA',
  'TRIGGER_NESTLEVEL',
  'UPDATE',
  // ChangeTracking
  'CHANGETABLE',
  'CHANGE_TRACKING_CONTEXT',
  'CHANGE_TRACKING_CURRENT_VERSION',
  'CHANGE_TRACKING_IS_COLUMN_IN_MASK',
  'CHANGE_TRACKING_MIN_VALID_VERSION',
  // FullTextSearch
  'CONTAINSTABLE',
  'FREETEXTTABLE',
  // SemanticTextSearch
  'SEMANTICKEYPHRASETABLE',
  'SEMANTICSIMILARITYDETAILSTABLE',
  'SEMANTICSIMILARITYTABLE',
  // FileStream
  'FILETABLEROOTPATH',
  'GETFILENAMESPACEPATH',
  'GETPATHLOCATOR',
  'PATHNAME',
  // ServiceBroker
  'GET_TRANSMISSION_STATUS',
  // Configuration
  '@@DATEFIRST',
  '@@DBTS',
  '@@LANGID',
  '@@LANGUAGE',
  '@@LOCK_TIMEOUT',
  '@@MAX_CONNECTIONS',
  '@@MAX_PRECISION',
  '@@NESTLEVEL',
  '@@OPTIONS',
  '@@REMSERVER',
  '@@SERVERNAME',
  '@@SERVICENAME',
  '@@SPID',
  '@@TEXTSIZE',
  '@@VERSION',
  // Cursor
  '@@CURSOR_ROWS',
  '@@FETCH_STATUS',
  // Datetime
  '@@DATEFIRST',
  // Metadata
  '@@PROCID',
  // System
  '@@ERROR',
  '@@IDENTITY',
  '@@ROWCOUNT',
  '@@TRANCOUNT',
  // Stats
  '@@CONNECTIONS',
  '@@CPU_BUSY',
  '@@IDLE',
  '@@IO_BUSY',
  '@@PACKET_ERRORS',
  '@@PACK_RECEIVED',
  '@@PACK_SENT',
  '@@TIMETICKS',
  '@@TOTAL_ERRORS',
  '@@TOTAL_READ',
  '@@TOTAL_WRITE'
];
export default () => {
  const formRef = useRef<Form>(null);
  const continerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<MonacoEditor.IStandaloneCodeEditor>(null);
  const formatterRef = useRef<any>(null);

  const handleLanguageChange = (v: string) => {
    const editor = editorRef.current;
    if (!editor) {
      return;
    }
    const model = editor.getModel();
    if (!model) {
      return;
    }
    MonacoEditor.setModelLanguage(model, v)
  }
  const handleShowMinMapChange = (v: boolean) => {
    const editor = editorRef.current;
    if (!editor) {
      return;
    }
    editor.updateOptions({
      minimap: {
        enabled: v,
      }
    })
  }
  const handleShowFormatChange = (v: boolean) => {
    if (!formatterRef.current) {
      return;
    }
    formatterRef.current.set(v);
  }
  const handleThemeChange = (v: string) => {
    const editor = editorRef.current;
    if (!editor) {
      return;
    }
    editor.updateOptions({
      theme: v,
    })
  }
  const handleCodeChange = () => {
    const editor = editorRef.current;
    if (!editor) {
      return;
    }
  }
  const handleInsert = () => {
    const editor = editorRef.current;
    if (!editor) {
      return;
    }
    const str: string = formRef.current?.formApi.getValue('insert');
    const position = editor.getPosition() || { lineNumber: 1, column: 1 };
    const row = position?.lineNumber || 1;
    const col = position?.column || 1;
    editor.executeEdits('', [
      {
        range: new MonacoRange(row, col, row, col),
        text: str,
        forceMoveMarkers: true
      }
    ]);
  }

  const handleValueChange = (value: any, obj: any) => {
    Object.entries(obj).forEach(([k, v]: any[]) => {
      if (k === 'language') {
        handleLanguageChange(v);
        return;
      }
      if (k === 'showMinMap') {
        handleShowMinMapChange(v);
        return;
      }
      if (k === 'showFormat') {
        handleShowFormatChange(v);
        return;
      }
      if (k === 'theme') {
        handleThemeChange(v);
        return;
      }
      if (k === 'code') {
        handleCodeChange();
        return;
      }
    })
  }
  useEffect(() => {
    if (!continerRef.current) {
      return;
    }
    formRef.current?.formApi.setValues({
      language: 'sql',
      showMinMap: true,
      showFormat: true,
      theme: 'vs',
      code: true,
      insert: '我是要插入的内容',
    });
    const editor = MonacoEditor.create(continerRef.current, {
      language: 'sql',
      minimap: { enabled: true },
      theme: 'vs',
      value: ' SELECT "$part_event","$part_date","#user_id","#event_name","#event_time","#account_id","#distinct_id","#server_time","platform","logintime","channel","#zone_offset","#lib","#lib_version","level","firstlogintime","systemversion","shoptype","consumegoldcoins","entertime","firstbuyitemtime","iswin","firstentertime","combattime","rehcargecount","logouttime","firstrechargetime","rechagelibao","#data_source","#os","#ip","#ram","#screen_height","#system_language","#device_model","#network_type","#city","#disk","#carrier","test01","#country_code","#device_id","#province","#bundle_id","#screen_width","#install_time","#simulator","#country","#fps","#manufacturer","#app_version","#os_version","click","istest","properties","isfirstbuy","product_num","product_name","#element_type","#screen_name","#resume_from_background","#background_duration","pay_currency_type","activity_reward","reward_amount","object_list","interest","temperature","micro_decimal","device_id","luky_day","attend_progress","is_fine","inteset_arrray_string","serial_no","object","cost","card_list","diamond_amount","draw_type","cost_type","item_list","battle_id","enter_time","url","cost_amount","special_char","long_english","mix_list","json_string","duration","is_max_battle","is_first_pay","pay_amount","currency_type","payment_name","long_mixed","lib","app_version","device_type","manufacturer","network","screen_height","browser","model","browser_version","brand","carrier_name","screen_width","os","os_version","ip","serverid","vip_level","city","listtest","metric_events","#ops_receipt_properties","bool","mark","dict","row","card_id","b","batchno","id","version","subversion","request","request_method","request_url","result_detail","result","repect_result","header","updatetime","last_time","stamp","level_before","reason","gold_get_amount","gold_change_after","gold_change_before","hero_type","hero_id","hero_quality","diamond_get_amount","online_time","te_ads_object","gxy001","gxy_a_1","currency",split("buyitems",chr(0009)) AS "buyitems" FROM  ta.v_event_11 WHERE ${PartDate:date1} and ${Variable2} and ${PartDate:date3} and ${Number:number4} and ${Selector:selector5} '
    });
    formatterRef.current = editor.createContextKey('shouldShowFormatter', true);
    editor.addAction({
      id: 'formatter',
      label: '格式化SQL',
      precondition: 'shouldShowFormatter',
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 2,
      keybindings: [
        KeyMod.Shift | KeyMod.Alt | KeyCode.KeyF,
      ],
      run: () => {
        const model = editor?.getModel();
        if (!model) {
          return;
        }
        const str = editor.getValue();
        const argus: string[] = [];
        const a = Date.now();
        const dealStr = str.replace(/\$\{.*?\}/g, (s) => {
          argus.push(s);
          return `${a} = ${a}`;
        })
        const formatStr = SqlFormatter(dealStr);
        let i = -1;
        const originStr = formatStr.replaceAll(`${a} = ${a}`, () => {
          i += 1;
          return argus[i];
        });
        editor.executeEdits('formatter', [
          {
            range: model.getFullModelRange(),
            text: originStr,
          },
        ]);
      }
    });

    const disposable = languages.registerCompletionItemProvider('sql', {
      triggerCharacters: ['.'],
      provideCompletionItems: (model, position) => {
        const { lineNumber, column } = position
        // 光标前文本
        const arr = model.getValueInRange({
          startLineNumber: lineNumber,
          startColumn: 0,
          endLineNumber: lineNumber,
          endColumn: column
        })?.split(' ') || [];
        const str = arr[arr.length - 1] || '';
        const kwd = str.toLowerCase() || '';
        const list: languages.CompletionItem[] = [];
        if (kwd.endsWith('.')) { // 前面是表
          list.push({
            label: {
              label: `xxx自动字段`,
              description: '字段',
            },
            kind: languages.CompletionItemKind.Variable,
            insertText: `xxx自动字段`,
            range: {
              startLineNumber: lineNumber,
              startColumn: column,
              endLineNumber: lineNumber,
              endColumn: column
            }
          });
        } else {
          sqlKeyWords
            .filter(d => d.toLowerCase().includes(kwd))
            .forEach(d => {
              list.push({
                label: {
                  label: d,
                  description: '关键字',
                },
                kind: languages.CompletionItemKind.Keyword,
                insertText: d,
                range: {
                  startLineNumber: lineNumber,
                  startColumn: column - kwd.length,
                  endLineNumber: lineNumber,
                  endColumn: column - kwd.length
                }
              });
            })
          list.push({
            label: {
              label: `${str}自动表`,
              description: '表',
            },
            kind: languages.CompletionItemKind.Keyword,
            insertText: `${str}自动表`,
            range: {
              startLineNumber: lineNumber,
              startColumn: column - kwd.length,
              endLineNumber: lineNumber,
              endColumn: column - kwd.length
            }
          });
          list.push({
            label: {
              label: `${str}自动字段`,
              description: '字段',
            },
            kind: languages.CompletionItemKind.Keyword,
            insertText: `${str}自动字段`,
            range: {
              startLineNumber: lineNumber,
              startColumn: column - kwd.length,
              endLineNumber: lineNumber,
              endColumn: column - kwd.length
            }
          });
        }
        return { suggestions: list, incomplete: true, dispose: true } as any;
      },
      resolveCompletionItem: (item) => {
        return item;
      }
    });
    MonacoEditor.defineTheme('de-light', {
      base: 'vs',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: 'FF0000', fontStyle: 'bold' },
        { token: 'operator.sql', foreground: 'FF0000', fontStyle: 'bold' },
        { token: 'identifier', foreground: '00FF00' },
        { token: 'number', foreground: '0000FF' },
        { token: 'comment', foreground: '888888' },
        { token: 'delimiter', foreground: 'FFFF00' },
      ],
      colors: [] as any,
    });
    MonacoEditor.defineTheme('de-black', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: 'FF0000', fontStyle: 'bold' },
        { token: 'operator.sql', foreground: 'FF0000', fontStyle: 'bold' },
        { token: 'identifier', foreground: '00FF00' },
        { token: 'number', foreground: '0000FF' },
        { token: 'comment', foreground: '000000' },
        { token: 'delimiter', foreground: 'FFFF00' },
      ],
      colors: [] as any,
    });
    (editorRef.current as any) = editor;
    return () => {
      editorRef.current?.dispose();
      disposable.dispose();
    }
  }, []);
  return {
    continerRef,
    editorRef,
    formRef,
    handleValueChange,
    handleInsert,
  };
}