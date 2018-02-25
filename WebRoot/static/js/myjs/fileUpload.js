var locat = (window.location + '').split('/');
$(function()
		{
			if ('tool' == locat[3])
			{
				locat = locat[0] + '//' + locat[2];
			} else
			{
				locat = locat[0] + '//' + locat[2] + '/' + locat[3];
			};
		});

$(top.hangge());
